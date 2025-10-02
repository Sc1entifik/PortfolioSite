import decryptCaptcha from "@/utils/decryptCaptcha";
import CaptchaCanvas from "./captchaCanvas";
import CaptchaForm from "./captchaForm";
import generateEncryptedCaptchaText from "./encryptedCaptchaText";

export default async function Captcha() {
	const encryptedCaptcha = await generateEncryptedCaptchaText(); 
	const captchaText = await decryptCaptcha(encryptedCaptcha);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<CaptchaCanvas captchaText={captchaText}/>
			<CaptchaForm encryptedCaptcha={encryptedCaptcha}/>
		</div>
	)
}
