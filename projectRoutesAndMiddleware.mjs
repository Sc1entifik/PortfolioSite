import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

export class ProjectRoutes {
	static #filename = fileURLToPath(import.meta.url);
	static #dirname = path.dirname(ProjectRoutes.#filename);
	static #public = ProjectRoutes.#dirname + "/public/"; 
	static port = process.env.PORT;
	static homepage = ProjectRoutes.#public + "index.html";
	static captchaForm = ProjectRoutes.#public + "captcha.html";
	static captchaFailure = ProjectRoutes.#public + "captchaFailure.html";
	static contactForm = ProjectRoutes.#public + "contact.html";
	static contactSuccess = ProjectRoutes.#public + "contactSuccess.html";
	static contactFailure = ProjectRoutes.#public + "contactFailure.html";
	static contactPostOptions = {extended: false, limit: 10000, parameterLimit: 4,};
	
}


export function postErrorMiddleware(err,req,res,next) {
	if (err) {
		console.error(err)
		res.render("contactFailure");
	} else {
		next();
	}
}
