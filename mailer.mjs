import nodemailer from "nodemailer";
import dotenv from "dotenv";


class EmailAccountMailer {
	#service;
	#user;
	#pass;
	#from;
	#to;
	#subject;
	#text;


	constructor(service, user, pass, from, to, subject, text) {
		this.#service = service;
		this.#user = user;
		this.#pass = pass;
		this.#from = from;
		this.#to = to;
		this.#subject = subject;
		this.#text = text;
	}


	#createTransporter() {
		return nodemailer.createTransport({
			service: this.#service,
			auth: {
				user: this.#user,
				pass: this.#pass,
			},
		});
	}


	#createMailObject() {
		return {
			from: this.#from,
			to: this.#to,
			subject: this.#subject,
			text: this.#text,
		};
	}


	sendEmail() {
		const transporter = this.#createTransporter();
		const mail = this.#createMailObject();
		transporter.sendMail(mail, (error, info) => {
			if (error) {
				console.error("Error sending email: " + error );
			} else {
				console.log("Email sent: " + info.response);
			}
		});

	}
};



function createAccountMailer(from, subject, message) {
	dotenv.config();
	return new EmailAccountMailer(process.env.SERVICE, process.env.USER_NAME, process.env.PASSWORD, from, process.env.USER_NAME, subject, message);


}


export function sendMessageFromForm(form) {
	const mailAccount = createAccountMailer(form.email, "PORTFOLIO SITE CONTACT REQUEST", `NAME: ${form.name}\n\n` + form.message);
	mailAccount.sendEmail();
}


