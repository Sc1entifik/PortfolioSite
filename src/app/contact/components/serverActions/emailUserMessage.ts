"use server";

import { cookies } from "next/headers";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import decryptCaptcha from "@/utils/decryptCaptcha";
import { redirect } from "next/navigation";
import { SiteMap } from "@/utils/siteMap";

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
	const isValid = await emailSuccess({reason, name, email, message});

	if (isValid) {
		await transporter.sendMail({
			from: email,
			to: process.env.SMTP_EMAIL_DESTINATION,
			subject: reason,
			text: `Name: ${name}\nFrom: ${email}\n\nMessage: ${message}` 
		} as SMTPTransport.MailOptions);
		redirect(SiteMap.FormProcess);

	} else {
	console.log("Submission failed! Try reloading the page and filling the form out faster.")
		
	}
}


async function emailSuccess(formElements: EmailForm):Promise<boolean> {
	const encryptedCaptcha= await cookies().then(x => x.get("captchaSuccess")?.value);
	if (encryptedCaptcha === undefined) return false;
	const decryptedCaptcha = await decryptCaptcha(encryptedCaptcha); 

	return decryptedCaptcha === "success" && formElements.reason && formElements.name && formElements.email && formElements.message ? true : false; 
}
