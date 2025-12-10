"use client";

import preferredRemValueAndSlopeVw from "@/utils/preferredRemValueAndSlope";
import { ReactNode } from "react";

export default function RpgBorder({ onClick, children }: { onClick: () => void, children: ReactNode}) {

	const minRem = .35;
	const maxRem = 1.8;
	const [preferredRem, slopeVw] = preferredRemValueAndSlopeVw(minRem, maxRem);

	return (
		<div 
			onClick={onClick} 
			className="flex flex-col flex-1 place-content-start rounded-md border-4 border-white border-solid text-white bg-ff7-menu gap-4"
			style={{fontSize: `clamp(${minRem}rem, ${preferredRem}rem + ${slopeVw}vw, ${maxRem}rem)`}}
		>
			{children}
		</div>
	);
}
