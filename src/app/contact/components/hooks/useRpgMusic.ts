import { useEffect, useRef } from "react";

export const useRpgMusic = () => {
	const audioRef = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = 0.5;
		}
	}, []);

	return audioRef
}
