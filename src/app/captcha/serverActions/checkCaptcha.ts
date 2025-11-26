"use server";
import { base64url, CompactEncrypt } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation"; 
import { SiteMap } from "@/utils/siteMap";
import decryptCaptcha from "@/utils/decryptCaptcha";

const createCaptchaSuccessCookie = async() => {
	const cookieStore = await cookies();
	const secret = base64url.decode(process.env.JWE_SECRET_KEY as string);
	const isProduction = process.env.RUNTIME_ENVIRONMENT === "production";
	const maxAge = 60 * 6;
	const encryptedSuccess = await new CompactEncrypt(new TextEncoder().encode("success"))
	.setProtectedHeader({ alg: "dir", enc: "A256GCM" })
	.encrypt(secret);

	cookieStore.set({name: "captchaSuccess", value: encryptedSuccess, httpOnly: true, secure: isProduction, sameSite: "strict", maxAge });
};

const checkCaptcha = async(form: FormData) => {
	const userAnswer = form.get("answer");
	const encryptedCaptcha = form.has("encryptedCaptcha") ? form.get("encryptedCaptcha") as string : ""; 
	const captchaText = await decryptCaptcha(encryptedCaptcha);

	if (captchaText === userAnswer) {
		await createCaptchaSuccessCookie();

		redirect(SiteMap.Contact);
	} else {

		redirect(SiteMap.Robot);
	}
};

export default checkCaptcha;
