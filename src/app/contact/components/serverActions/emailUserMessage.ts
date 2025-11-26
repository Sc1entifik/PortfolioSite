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
			from: email,
			to: process.env.SMTP_EMAIL_DESTINATION,
			subject: reason,
			text: `Name: ${name}\nFrom: ${email}\n\nMessage: ${message}` 
		} as SMTPTransport.MailOptions);
		await createMessageSentCookie();

	}

	redirect(SiteMap.FormProcess);
}


async function isValidEmailForm(formElements: EmailForm):Promise<boolean> {
	const encryptedCaptcha = await cookies().then(x => x.get("captchaSuccess")?.value);
	if (encryptedCaptcha === undefined) return false;
	const decryptedCaptcha = await decryptCaptcha(encryptedCaptcha); 

	return decryptedCaptcha === "success" && formElements.reason && formElements.name && formElements.email && formElements.message ? true : false; 
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
