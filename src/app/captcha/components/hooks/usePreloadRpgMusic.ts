"use client";

import { MediaMap } from "@/utils/mediaMap";
import { useEffect } from "react";

export function usePreloadRpgMusic() {
	useEffect(() => {
		const audio = new Audio(MediaMap.CURIOUS_CRITTERS);
		audio.preload = "auto";
		audio.load();
	}, []);
}
