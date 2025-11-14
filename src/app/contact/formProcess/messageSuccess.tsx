"use client"

import { useRef } from "react";
import { MediaMap } from "@/utils/mediaMap";
import { useRouter } from "next/navigation";
import RpgBorder from "../components/rpgBorder";

export default function MessageSuccess() {
	const inputRef = useRef<HTMLInputElement>(null);
	const confirmationSound = new Audio(MediaMap.CONFIRM_SOUND);
	const router = useRouter(); 

	return (
		<RpgBorder onClick={ () => inputRef.current?.focus() }>
			<p>Your message has been sent. You will be contacted soon!</p>
			<button onClick={() => {
				confirmationSound.currentTime = 0;
				confirmationSound
					.play()
					.catch(e => console.warn("Audio playback failed: ", e));

				router.replace("/");
			}}>OK</button>
		</RpgBorder>
	);
}
