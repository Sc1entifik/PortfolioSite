const filledbox = "@";

export default function LandingPageHeader({numCh} : {numCh: number}) {
	const headerLine = () => {
		let headerString = "";

		for (let i=0; i<numCh; i++) {
			headerString += filledbox;
		}

		return headerString;
	}

	const headerFiller = (headerText: string) => {
		const endCap = filledbox + filledbox;
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
		<div className="whitespace-pre subpixel-antialiased">
			<p>{headerLine()}</p>
			<p>{headerFiller("Dustin Rosenberry's")}</p>
			<p>{headerFiller("Portfolio System")}</p>
			<p>{headerLine()}</p>
		</div>
	)
}
