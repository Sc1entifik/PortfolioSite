"use client";

import { useEffect, useRef } from "react";
import { MediaMap } from "@/utils/mediaMap";
import { useRouter } from "next/navigation";
import RpgBorder from "../components/rpgBorder";
import MessageFlexFormat from "./messageFlexFormat";

export default function MessageSuccess() {
	const inputRef = useRef<HTMLInputElement>(null);
	const confirmationSound = useRef<HTMLAudioElement>(new Audio(MediaMap.CONFIRM_SOUND));
	const router = useRouter(); 

	useEffect(() => {
		confirmationSound.current.currentTime = 0;
		confirmationSound.current
			.play()
			.catch(e => console.warn("Audio playback failed: ", e));

	},[]);

	return (
		<MessageFlexFormat>
			<RpgBorder onClick={ () => inputRef.current?.focus() }>
				<p className="p-2">Your message has been sent. You will be contacted soon!</p>
				<button 
					onClick={() => {
						confirmationSound.current.currentTime = 0;
						confirmationSound.current
							.play()
							.catch(e => console.warn("Audio playback failed: ", e));

						router.replace("/");
					}}
					className="hover:cursor-pointer"
				>
					OK
				</button>
			</RpgBorder>
		</MessageFlexFormat>
	);
}
