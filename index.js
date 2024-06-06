import express from "express";
import dotenv from "dotenv";
import { createCanvas } from "canvas";
import { CaptchaGenerator } from "./captchaClass.mjs";
import { ProjectRoutes, postErrorMiddleware } from "./projectRoutesAndMiddleware.mjs";
import { PortfolioSiteMailer } from "./mailer.mjs";

let currentCaptchas = [];

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
	captchaObject.insertJson(currentCaptchas);
	captchaObject.configureCaptchaCanvas(ctx);

	res.render("captcha", {canvas: canvas.toDataURL(), id: captchaObject.id});

});



app.post("/contact", express.urlencoded(ProjectRoutes.contactPostOptions), postErrorMiddleware, async (req, res) => {
	let mailer = new PortfolioSiteMailer(req.body);
	const mailSent = await mailer.sendEmailThenReturnStatus();

	if (mailSent) {
		res.render("contactSuccess");

	} else {
		res.render("contactFailure");
	}
		
});

app.post("/captcha", express.urlencoded({extended:false}), postErrorMiddleware, (req, res) => {
	const activeCaptcha = currentCaptchas.filter(x => x.id === req.body.id)[0];
	currentCaptchas = currentCaptchas.filter(x => x.id !== activeCaptcha.id); //removes the activeCaptcha entry from the currentCaptchas array to free up memory and increase lookup speed

	if (activeCaptcha.captcha === req.body.answer) {
		res.render("contact");
	} else {
		res.render("captchaFailure");
	}
});

app.listen(ProjectRoutes.port, () => console.log(`Example app listening on port ${ProjectRoutes.port}`));
