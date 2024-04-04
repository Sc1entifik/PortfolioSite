import express from "express";
import { ProjectRoutes } from "./projectRoutes.mjs";
import { returnMailerFromForm } from "./mailer.mjs";


const app = express();

app.use(express.static("public"));

app.set("view engine", "html");

app.get("/", (req, res) => res.sendFile(ProjectRoutes.homepage));
app.get("/contact", (req, res) => res.sendFile(ProjectRoutes.contactForm));
app.get("/contactSuccess", (req, res) => res.sendFile(ProjectRoutes.contactSuccess));
app.get("/contactFailure", (req, res) => res.sendFile(ProjectRoutes.contactFailure));

app.post("/contact", express.urlencoded(ProjectRoutes.contactPostOptions), async (req, res) => {

	let mailer = returnMailerFromForm(req.body); 
	const mailSent = await mailer.sendEmailThenReturnStatus();

	if (mailSent) {
		res.sendFile(ProjectRoutes.contactSuccess);

	} else {
		res.sendFile(ProjectRoutes.contactFailure);
	}
		
});

app.listen(ProjectRoutes.port, () => console.log(`Example app listening on port ${ProjectRoutes.port}`));
