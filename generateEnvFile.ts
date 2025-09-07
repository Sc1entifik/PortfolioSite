import { randomBytes } from "node:crypto";


const generateEnvFile = () => {
	const secretKey = randomBytes(32).toString("base64url");
	console.log(`JWE_SECRET_KEY=${secretKey}`)
	console.log("SMTP_ADDRESS=")
}

generateEnvFile();
