"use client";

import Form from "next/form";
import checkCaptcha from "./serverActions/checkCaptcha";
import preferredRemValueAndSlopeVw from "@/utils/preferredRemValueAndSlope";
import { usePreloadRpgMusic } from "./hooks/usePreloadRpgMusic";

export default function CaptchaForm({encryptedCaptcha}: {encryptedCaptcha: string}) {
	const minRem = 19;
	const maxRem = 27;//45
	const [preferredRem, slopeVw] = preferredRemValueAndSlopeVw(minRem, maxRem);

	//preloads music for the contact form while user is filling out the captcha
	usePreloadRpgMusic();

	return (
		<Form action={checkCaptcha} className="text-black bg-white" style={{ height:"1.5ch", width:`clamp(${minRem}rem, ${preferredRem}rem + ${slopeVw}vw, ${maxRem}rem)` }}>
			<input name="encryptedCaptcha" value={encryptedCaptcha} hidden readOnly/>
			<input className="pl-2 tracking-wider focus:outline-none" name="answer" />
			<button type="submit" />
		</Form>
	);
}
