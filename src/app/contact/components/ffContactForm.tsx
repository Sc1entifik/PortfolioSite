"use client";

import { useState } from "react";
import { useRpgMusic } from "./hooks/useRpgMusic";
import TextInputForm from "./textInputForm";
import RadioInputForm from "./radioInputForm";

export default function FfContactForm() {
	const [contactReason, setContactReason] = useState("Hiring Me For A Project Or A Dev Position");
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [userMessage, setUserMessage] = useState("");
	const audioRef = useRpgMusic();

	
	return (
		<div className="flex flex-col h-[98vh] w-[99%] pt-2 m-auto gap-2 justify-around bg-black">
			<audio ref={audioRef} autoPlay loop src="/audio/CuriousCritters.mp3"></audio>

			<RadioInputForm contactReason={contactReason} onChange={setContactReason}/>
			
			<div className="flex flex-1 gap-2">
				<TextInputForm inputPrompt="What is your name?" onChange={setUserName}/>
				<TextInputForm inputPrompt="What is your email address?" onChange={setEmail}/>
			</div>

			<TextInputForm inputPrompt="Leave me a message and I'll get back to you." onChange={setUserMessage}/>
		</div>
	);
}
