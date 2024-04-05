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
	static contactForm = ProjectRoutes.#public + "contact.html";
	static contactSuccess = ProjectRoutes.#public + "contactSuccess.html";
	static contactFailure = ProjectRoutes.#public + "contactFailure.html";
	static contactPostOptions = {extended: false, limit: 10000, parameterLimit: 3,};
	
}


export function postErrorMiddleware(err,req,res,next) {
	if (err) {
		console.error(err)
		res.sendFile(ProjectRoutes.contactFailure);

	} else {
		next();
	}
}
