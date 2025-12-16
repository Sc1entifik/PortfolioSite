import { connection } from "next/server";
import generateEncryptedCaptchaText from "./utilities/encryptedCaptchaText";
import decryptCaptcha from "@/utils/decryptCaptcha";
import CaptchaCanvas from "./captchaCanvas";
import CaptchaForm from "./captchaForm";

const testString = async () => "Test Value";

export default async function CaptchaElements() {
	await connection();
	const test = await testString();
	const encryptedCaptcha = await generateEncryptedCaptchaText();
	const captchaText = await decryptCaptcha(encryptedCaptcha);

	return (
		<div className="flex flex-col items-center gap-3">
			<CaptchaForm encryptedCaptcha={encryptedCaptcha}/>
		</div>
	);
}
