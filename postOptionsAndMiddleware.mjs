import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";


dotenv.config();


export class PortsAndPostOptions {
	static port = process.env.PORT;
	static contactPostOptions = {extended: false, limit: 10000, parameterLimit: 4,};
	static captchaPostOptions = {extended: false};
}


export function postErrorMiddleware(err,req,res,next) {
	if (err) {
		console.error(err)
		res.render("contactFailure");
	} else {
		next();
	}
}
