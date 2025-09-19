import { base64url, compactDecrypt } from "jose";
import CaptchaCanvas from "./captchaCanvas";
import { cookies } from "next/headers";

export default async function Contact() {
	const cookieStore = await cookies();
	const encryptedCaptcha = cookieStore.get("captchaTest")?.value as string;
	const secret = base64url.decode(process.env.JWE_SECRET_KEY as string);
	const { plaintext } = await compactDecrypt(encryptedCaptcha, secret);
	const captchaText = new TextDecoder().decode(plaintext);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<CaptchaCanvas captchaText={captchaText}/>
		</div>
	)
}
