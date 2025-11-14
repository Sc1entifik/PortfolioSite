import { useState } from "react"

export const useMenuSound = (src: string) => {
	const [audio] = useState(new Audio(src));
	const playAudio = () => {
		audio.currentTime = 0;
		audio.play().catch(e => console.warn("Audio playback failed: ", e));
	}

	return playAudio;
}
