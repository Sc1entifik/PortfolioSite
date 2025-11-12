"use server";

import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

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

	await transporter.sendMail({
		from: process.env.SMTP_EMAIL_ADDRESS,
		to: process.env.SMTP_EMAIL_ADDRESS,
		subject: reason,
		text: `Name: ${name}\nFrom: ${email}\n\nMessage: ${message}` 
	} as SMTPTransport.MailOptions);

	console.log(`Reason: ${reason}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`)
}
