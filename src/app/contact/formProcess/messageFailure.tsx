"use client";
import { useRef } from "react";
import { MediaMap } from "@/utils/mediaMap";
import RpgBorder from "../components/rpgBorder";
import { SiteMap } from "@/utils/siteMap";
import { useRouter } from "next/navigation";
import MessageFlexFormat from "./messageFlexFormat";

export default function MessageFailure() {
	const inputRef = useRef<HTMLInputElement>(null);
	const tryAgainSound = new Audio(MediaMap.HOVER_SOUND);
	const router = useRouter();

	return (
		<MessageFlexFormat>
			<RpgBorder onClick={ () => inputRef.current?.focus() }>
				<p className="p-2">Your message failed to get sent. This probably happened because the form was not filled out quickly enough.</p>
				<button onClick={() => {
					tryAgainSound.currentTime = 0;
					tryAgainSound
						.play()
						.catch( e => console.warn("Audo playback failed: ", e ) );

					router.replace(SiteMap.Contact);
				}}>Try Again</button>
			</RpgBorder>
		</MessageFlexFormat>
	);
}
