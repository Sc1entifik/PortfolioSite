import nodemailer from "nodemailer";
import dotenv from "dotenv";


dotenv.config();


export class PortfolioSiteMailer {
	#service = process.env.SERVICE;
	#user = process.env.USER_NAME;
	#pass = process.env.PASSWORD;
	#contactName;
	#from;
	#to = process.env.USER_NAME;
	#subject;
	#text;


	constructor(formBody) {
		this.#from = formBody.email;
		this.#subject = formBody.subject;
		this.#text = formBody.message;
		this.#contactName = formBody.name;
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
			subject: this.#subject.toUpperCase(),
			text: `Name: ${this.#contactName}\nEmail: ${this.#from}\n\n${this.#text}`,
		};
	}


	sendEmailThenReturnStatus() {
		const transporter = this.#createTransporter();
		const mail = this.#createMailObject();
		
		return transporter.sendMail(mail).catch(_error => false).then(_value => true);

	}
};
