import { useEffect, useState } from "react";

export function useCharCount(measurerRef: React.RefObject<HTMLDivElement>) {
	const [numCh, setNumCh] = useState(25);

	useEffect(() => {
		const updateCh = () => {
			if (!measurerRef.current) return;

			const charWidth = measurerRef.current.offsetWidth;
			const screenWidth = window.innerWidth;
			const characterCount = Math.floor(screenWidth / charWidth);
			setNumCh(characterCount);
		};

		updateCh();
		window.addEventListener("resize", updateCh);

		return () => window.removeEventListener("resize", updateCh);
	}, [measurerRef]);

	return numCh;
}
