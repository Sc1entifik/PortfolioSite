import decryptCaptcha from "@/utils/decryptCaptcha";
import { SiteMap } from "@/utils/siteMap";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import FfContactForm from "./components/ffContactForm";

export default async function ContactMe() {
	const cookieStore = await cookies();
	const encryptedSuccess = cookieStore.get("captchaSuccess")?.value;

	if (!encryptedSuccess) {
		redirect(SiteMap.Captcha);
	}

	const decryptedSuccess = await decryptCaptcha(encryptedSuccess);

	if (decryptedSuccess !== "success") {
		redirect(SiteMap.Captcha);
	}

	return <FfContactForm/>
}
