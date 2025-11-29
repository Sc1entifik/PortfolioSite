"use client";
import Form from "next/form";
import checkCaptcha from "./serverActions/checkCaptcha";

export default function CaptchaForm({encryptedCaptcha}: {encryptedCaptcha: string}) {
	return (
		<div className="text-black bg-white">
			<Form action={checkCaptcha}>
				<input name="encryptedCaptcha" value={encryptedCaptcha} hidden readOnly/>
				<input className="pl-2" name="answer" />
				<button type="submit" />
			</Form>
		</div>
	);
}
