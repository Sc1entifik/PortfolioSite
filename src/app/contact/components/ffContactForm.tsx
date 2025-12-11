"use client";

import Form from "next/form";
import { useEffect, useState } from "react";
import { useRpgMusic } from "./hooks/useRpgMusic";
import { MediaMap } from "@/utils/mediaMap";
import { emailUserMessage } from "./serverActions/emailUserMessage";
import TextInputForm from "./textInputForm";
import TextAreaInputForm from "./textAreaInputForm";
import RadioInputForm from "./radioInputForm";
import AudioCredits from "./audioCredits";

export default function FfContactForm() {
	const [contactReason, setContactReason] = useState("Hiring Me For A Project Or A Dev Position");
	const audioRef = useRpgMusic();


	useEffect(() => {
		document.body.style.backgroundColor = "black";

		return () => {
			document.body.style.backgroundColor = "";
		};
	},[]);

	
	return (
		<div className="flex place-content-center h-dvh">
			<div  className="flex flex-col min-h-[65dvh] md:min-h-[85dvh] lg:min-h-[98dvh] w-[95dvw] lg:w-[99dvw] gap-1 3xl:gap-2 pt-2 m-auto justify-around bg-black">
				<audio ref={audioRef} autoPlay loop src={ MediaMap.CURIOUS_CRITTERS }></audio>

				<RadioInputForm contactReason={contactReason} onChange={setContactReason}/>
				
				<Form type="submit" action={emailUserMessage} className="flex flex-col flex-1 gap-y-1 3xl:gap-y-2"> 
					<input value={contactReason} name="reason" hidden readOnly/>

					<div className="flex gap-y-1 gap-x-0.5 sm:flex-col sm:flex-1 3xl:gap-y-2">
						<TextInputForm name="name" inputPrompt="What is your name?" />
						<TextInputForm name="email" inputPrompt="What is your email address?" />
					</div>

					<div className="flex flex-col gap-y-1 sm:flex-row sm:gap-x-0.5 sm:flex-1 3xl:gap-y-2">
						<TextAreaInputForm name="message" inputPrompt="Leave me a message and I'll get back to you" />
						<AudioCredits/>
					</div>

					<button type="submit" hidden/>
				</Form>

			</div>
		</div>
	);
}
