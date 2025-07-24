import preferredRemValueAndSlopeVw from "../../preferredRemValueAndSlope";

export default function TitleHeader({title}: {title: string}) {
	const minRem = 1.75;
	const maxRem = 5.5;
	const [preferredRemValue, slopeVw] = preferredRemValueAndSlopeVw(minRem, maxRem); 

	return <h1 
		className="text-projects-titleRed" 
		style={{ fontSize: `clamp(${minRem}rem, ${preferredRemValue}rem + ${slopeVw}vw, ${maxRem}rem)` }}
		>
		{title} 
	</h1>
}
