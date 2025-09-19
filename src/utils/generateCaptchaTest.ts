import { base64url, CompactEncrypt } from "jose";

const characterPool = () => {
	const smallCaseLetters = "abcdefghijklmnopqrstuvwxyz";
	const upperCaseLetters = smallCaseLetters.toUpperCase();
	const numbers = "1234567890";
	const symbols = "!@#$%&*";

	return smallCaseLetters + upperCaseLetters + numbers + symbols;
}


const generateCaptchaString = () => {
	const charPool = characterPool();
	const captchaLength = Math.floor(Math.random() * 9) + 8;
	let captchaString = "";

	for (let i=0; i<captchaLength; i++) {
		const randomCharpoolIndex = Math.floor(Math.random() * charPool.length);
		captchaString += charPool[randomCharpoolIndex];
	}

	return captchaString;
}


const generateEncryptedCaptchaString = () => {
	const captchaText = generateCaptchaString();
	const secret = base64url.decode(process.env.JWE_SECRET_KEY as string);

	return new CompactEncrypt(new TextEncoder().encode(captchaText))
		.setProtectedHeader({ alg: "dir", enc: "A256GCM" })
		.encrypt(secret);
}

export default generateEncryptedCaptchaString;
