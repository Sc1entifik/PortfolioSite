import express from "express";
import { ProjectRoutes, postErrorMiddleware } from "./projectRoutesAndMiddleware.mjs";
import { returnMailerFromForm } from "./mailer.mjs";
import dotenv from "dotenv";

dotenv.config;
const app = express();

app.use(express.static("public"));

app.set("view engine", "html");

app.get("/", (req, res) => res.sendFile(ProjectRoutes.homepage));
app.get("/contact", (req, res) => res.sendFile(ProjectRoutes.contactForm));
app.get("/contactSuccess", (req, res) => res.sendFile(ProjectRoutes.contactSuccess));
app.get("/contactFailure", (req, res) => res.sendFile(ProjectRoutes.contactFailure));
app.get("/captcha", (req, res) => res.sendFile(ProjectRoutes.captchaForm));



app.post("/contact", express.urlencoded(ProjectRoutes.contactPostOptions), postErrorMiddleware, async (req, res) => {
	let mailer = returnMailerFromForm(req.body); 
	const mailSent = await mailer.sendEmailThenReturnStatus();

	if (mailSent) {
		res.sendFile(ProjectRoutes.contactSuccess);

	} else {
		res.sendFile(ProjectRoutes.contactFailure);
	}
		
});

app.post("/captcha", express.json(), postErrorMiddleware, (req, res) => {
	if (req.body.postPass === process.env.POST_PASS && req.body.userResponse === req.body.captchaPhrase) {
		console.log("Why won't the page change?")
		res.sendFile(ProjectRoutes.contactForm);
		console.log(res.headersSent);
		
	} else {
		console.log(`req.body.postPass: ${req.body.postPass}\nprocess.env.POST_PASS: ${process.env.POST_PASS}\nreq.body.userResponse: ${req.body.userResponse}\nreq.body.captchaPhrase: ${req.body.captchaPhrase}\n\n${req.body.postPass === process.env.POST_PASS}\n${req.body.userResponse === req.body.captchaPhrase}`);
	}
});

app.listen(ProjectRoutes.port, () => console.log(`Example app listening on port ${ProjectRoutes.port}`));
