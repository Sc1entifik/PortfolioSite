import express from "express";
import dotenv from "dotenv";
import { createCanvas } from "canvas";
import { CaptchaGenerator } from "./captchaClass.mjs";
import { PortsAndPostOptions, postErrorMiddleware } from "./postOptionsAndMiddleware.mjs";
import { PortfolioSiteMailer } from "./mailer.mjs";


let currentCaptchas = new Map();

dotenv.config;
const app = express();


app.use(express.static("public"));
app.set("view engine", "pug");


app.get("/", (req, res) => res.render("index"));
app.get("/captcha", (req, res) => {
	const defaultWidth = 200;
	const defaultHeight = 100;
	const canvas = createCanvas(defaultWidth, defaultHeight);
	const captchaObject = new CaptchaGenerator(canvas.width, canvas.height);
	const ctx = canvas.getContext("2d");
	captchaObject.insertMapEntry(currentCaptchas);
	captchaObject.configureCaptchaCanvas(ctx);

	res.render("captcha", {canvas: canvas.toDataURL(), id: captchaObject.id});
});


app.post("/captcha", express.urlencoded(PortsAndPostOptions.captchaPostOptions), postErrorMiddleware, (req, res) => {
	const activeCaptcha = currentCaptchas.get(req.body.id);
	currentCaptchas.delete(req.body.id);

	if (activeCaptcha === req.body.answer) {
		res.render("contact");
	} else {
		res.render("captchaFailure");
	}
});


app.post("/contact", express.urlencoded(PortsAndPostOptions.contactPostOptions), postErrorMiddleware, async (req, res) => {
	let mailer = new PortfolioSiteMailer(req.body);
	const mailSent = await mailer.sendEmailThenReturnStatus();

	if (mailSent) {
		res.render("contactSuccess");

	} else {
		res.render("contactFailure");
	}
		
});


app.listen(PortsAndPostOptions.port, () => console.log(`Example app listening on port ${PortsAndPostOptions.port}`));
