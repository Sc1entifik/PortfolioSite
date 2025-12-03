import decryptCaptcha from "@/utils/decryptCaptcha";
import CaptchaCanvas from "./components/captchaCanvas";
import CaptchaForm from "./components/captchaForm";
import RobotHeader from "./components/robotHeader";
import HomeLink from "./components/homeLink";
import generateEncryptedCaptchaText from "./components/utilities/encryptedCaptchaText";

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
