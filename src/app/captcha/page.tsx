import decryptCaptcha from "@/utils/decryptCaptcha";
import CaptchaCanvas from "./captchaCanvas";
import CaptchaForm from "./captchaForm";
import generateEncryptedCaptchaTest from "./encryptedCaptchaTest";

export default async function Captcha() {
	const encryptedCaptcha = await generateEncryptedCaptchaTest(); 
	const captchaText = await decryptCaptcha(encryptedCaptcha);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<CaptchaCanvas captchaText={captchaText}/>
			<CaptchaForm encryptedCaptcha={encryptedCaptcha}/>
		</div>
	)
}
