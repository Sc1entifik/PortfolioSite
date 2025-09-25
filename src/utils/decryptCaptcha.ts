import { base64url, compactDecrypt } from "jose"

const decryptCaptcha = async (encryptedCaptcha: string) => {
	const secret = base64url.decode(process.env.JWE_SECRET_KEY as string);
	const { plaintext } = await compactDecrypt(encryptedCaptcha, secret);
	const captchaText = new TextDecoder().decode(plaintext);
	
	return captchaText; 
}

export default decryptCaptcha;
