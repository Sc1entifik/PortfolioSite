"use client";

import { useState } from "react";
import { useRpgMusic } from "./hooks/useRpgMusic";
import { MediaMap } from "@/utils/mediaMap";
import { emailUserMessage } from "./serverActions/emailUserMessage";
import TextInputForm from "./textInputForm";
import RadioInputForm from "./radioInputForm";
import AudioCredits from "./audioCredits";
import Form from "next/form";

export default function FfContactForm() {
	const [contactReason, setContactReason] = useState("Hiring Me For A Project Or A Dev Position");
	const audioRef = useRpgMusic();

	
	return (
		<div  className="flex flex-col h-[99vh] w-[99vw] gap-2 pt-2 m-auto justify-around bg-black">
			<audio ref={audioRef} autoPlay loop src={ MediaMap.CURIOUS_CRITTERS }></audio>

			<RadioInputForm contactReason={contactReason} onChange={setContactReason}/>
			
			<Form type="submit" action={emailUserMessage} className="flex flex-col gap-2"> 
				<div className="flex flex-1 gap-2">
					<TextInputForm name="name" inputPrompt="What is your name?" />
					<TextInputForm name="email" inputPrompt="What is your email address?" />
				</div>

				<div className="flex flex-1 gap-2">
					<input value={contactReason} name="reason" hidden readOnly/>
					<TextInputForm name="message" inputPrompt="Leave me a message and I'll get back to you" />
					<AudioCredits/>
				</div>
				<button type="submit" hidden/>
			</Form>

		</div>
	);
}
