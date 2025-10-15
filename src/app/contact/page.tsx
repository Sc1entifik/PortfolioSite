import decryptCaptcha from "@/utils/decryptCaptcha";
import { SiteMap } from "@/utils/siteMap";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import RpgBorder from "./rpgBorder";

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

	return (
		<div className="flex flex-col h-[98vh] w-[99%] mt-2 m-auto gap-2 justify-around bg-black">
			<RpgBorder>
				<h1 className="py-1 pl-1">Congratulations! You appear to be human. You may contact me.</h1>
			</RpgBorder>

			<RpgBorder>
				<p className="py-2 pl-1">Why do you wish to speak with me?</p>
				<p className="py-2 pl-1">Testing the presence of multiple children.</p>
			</RpgBorder>

			<RpgBorder>
				<p className="py-2 pl-1">What is your name?</p>
			</RpgBorder>
			
			<RpgBorder>
				<p className="py-2 pl-1">What is your email address?</p>
			</RpgBorder>
		</div>
	);
}
