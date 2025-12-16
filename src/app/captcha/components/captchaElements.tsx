import generateEncryptedCaptchaText from "./utilities/encryptedCaptchaText";
import decryptCaptcha from "@/utils/decryptCaptcha";
import CaptchaCanvas from "./captchaCanvas";
import CaptchaForm from "./captchaForm";
import { connection } from "next/server";

const testString = async () => "Test Value";

export default async function CaptchaElements() {
	await connection();
	const test = await testString();
	const encryptedCaptcha = await generateEncryptedCaptchaText();
	const captchaText = await decryptCaptcha(encryptedCaptcha);

	return (
		<div className="flex flex-col items-center gap-3">
			<CaptchaCanvas captchaText={test}/>
			<CaptchaCanvas captchaText={captchaText}/>
			<CaptchaForm encryptedCaptcha={encryptedCaptcha}/>
		</div>
	);
}
