"use client"
import { useRef } from "react";
import { useCharCount } from "./useCharCount";
import InvisibleMeasurementDiv from "./invisibleMeasurementDiv";

const borderChar = "@";

export default function LandingPageHeader() {
	const measurerRef = useRef<HTMLDivElement>(null);
	const numCh = useCharCount(measurerRef);


	const headerLine = () => {
		let headerString = "";

		for (let i=0; i<numCh; i++) {
			headerString += borderChar;
		}

		return headerString;
	}

	const headerFiller = (headerText: string) => {
		const endCap = borderChar + borderChar;
		const innerWidth = numCh - (endCap.length * 2);
		const totalPadding = innerWidth - headerText.length;
		const leftPadding = Math.floor(totalPadding / 2);
		const rightPadding = totalPadding - leftPadding;
		let headerString = endCap;

		for (let i=0; i<leftPadding; i++) {
			headerString += " ";
		}

		headerString += headerText;

		for (let i=0; i<rightPadding; i++) {
			headerString += " ";
		}

		headerString += endCap;

		return headerString
	}

	return (
			<div className="whitespace-pre mt-1 mx-auto">
				<InvisibleMeasurementDiv ref={measurerRef} />
				<p>{headerLine()}</p>
				<p>{headerFiller("Dustin Rosenberry's")}</p>
				<p>{headerFiller("Portfolio System")}</p>
				<p>{headerLine()}</p>
			</div>
	)
}
