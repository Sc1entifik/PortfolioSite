import { connection } from "next/server";
import decryptCaptcha from "@/utils/decryptCaptcha";
import { SiteMap } from "@/utils/siteMap";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import FfContactForm from "./components/ffContactForm";

export default async function ContactMe() {
	await connection();
	const cookieStore = await cookies();
	const encryptedCaptchaObject = cookieStore.get("captchaValuesObject")?.value;

	if (!encryptedCaptchaObject) {
		redirect(SiteMap.Captcha);
	}

	const decryptedCaptchaObject = JSON.parse(await decryptCaptcha(encryptedCaptchaObject));
	const decryptedCaptchaValue = await decryptCaptcha(decryptedCaptchaObject.encryptedCaptcha);
	const createdWithinThreeMin = Date.now() - decryptedCaptchaObject.createdAt <= 3 * 60 * 1000;

	if (!decryptedCaptchaValue || decryptedCaptchaObject.userAnswer !== decryptedCaptchaValue || !createdWithinThreeMin) {
		redirect(SiteMap.Captcha);
	}

	return <FfContactForm/>
}
