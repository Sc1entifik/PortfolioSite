"use server";

import { cookies } from "next/headers";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import decryptCaptcha from "@/utils/decryptCaptcha";
import { redirect } from "next/navigation";
import { SiteMap } from "@/utils/siteMap";
import { base64url, CompactEncrypt } from "jose";

interface EmailForm {
	reason: FormDataEntryValue | null;
	name: FormDataEntryValue | null;
	email: FormDataEntryValue | null;
	message: FormDataEntryValue | null;
}

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_ADDRESS,
	port: process.env.SMTP_PORT,
	secure: false,
	auth: {user: process.env.SMTP_EMAIL_ADDRESS, pass: process.env.SMTP_PASSWORD}
} as SMTPTransport.Options); 


export async function emailUserMessage(form: FormData) {
	const reason = form.get("reason");
	const name = form.get("name");
	const email = form.get("email");
	const message = form.get("message");
	const isValid = await isValidEmailForm({reason, name, email, message});

	if (isValid) {
		await transporter.sendMail({
			from: process.env.SMTP_EMAIL_ADDRESS,
			replyTo: email,
			to: process.env.SMTP_EMAIL_DESTINATION,
			subject: reason,
			text: `Name: ${name}\nFrom: ${email}\n\nMessage: ${message}` 
		} as SMTPTransport.MailOptions);
		await createMessageSentCookie();
	}

	redirect(SiteMap.FormProcess);
}


async function isValidEmailForm(formElements: EmailForm):Promise<boolean> {
	const {reason, name, email, message} = formElements;
	const encryptedCaptchaObject = await cookies().then(x => x.get("captchaValuesObject")?.value);

	if (encryptedCaptchaObject === undefined) return false;
	const decryptedCaptchaObject = JSON.parse(await decryptCaptcha(encryptedCaptchaObject)); 
	if (decryptedCaptchaObject === undefined) return false;
	const captchaValue = await decryptCaptcha(decryptedCaptchaObject.encryptedCaptcha);
	const isCreatedWithinFiveMin = Date.now() - decryptedCaptchaObject.createdAt <= 5 * 60 * 1000;
	
	if ( !isCreatedWithinFiveMin || captchaValue !== decryptedCaptchaObject.userAnswer || typeof reason !== "string" || typeof name !== "string" || typeof email !== "string" || typeof message !== "string" )	return false;
	if ( !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ) return false;
	if (message.length > 5000) return false;
	if ( [reason, name, email].some(field => /[\x00-\x1F\x7F]/.test(field))) return false;

	return true;
}


async function createMessageSentCookie() {
	const cookieStore = await cookies();
	cookieStore.delete("captchaSuccess");
	const secret = base64url.decode(process.env.JWE_SECRET_KEY as string);
	const encryptedMessage = new CompactEncrypt(new TextEncoder().encode("Message Sent Successfully"))
	.setProtectedHeader({ alg: "dir", enc: "A256GCM" })
	.encrypt(secret);
	const maxAge = 60 * 3;

	cookieStore.set({name:"messageSuccess", value: await encryptedMessage, httpOnly: true, secure: process.env.RUNTIME_ENVIRONMENT === "production", maxAge })
}
