import decryptCaptcha from "@/utils/decryptCaptcha";
import CaptchaCanvas from "./captchaCanvas";
import CaptchaForm from "./captchaForm";
import generateEncryptedCaptchaText from "./encryptedCaptchaText";
import RobotHeader from "./robotHeader";
import HomeLink from "./homeLink";

export default async function Captcha() {
	const encryptedCaptcha = await generateEncryptedCaptchaText(); 
	const captchaText = await decryptCaptcha(encryptedCaptcha);

	return (
		<div className="flex flex-col items-center justify-between h-dvh gap-10 p-2">
			<RobotHeader/>
			<div className="flex flex-col items-center gap-3">
				<CaptchaCanvas captchaText={captchaText}/>
				<CaptchaForm encryptedCaptcha={encryptedCaptcha}/>
			</div>
			<HomeLink/>
		</div>
	)
}
