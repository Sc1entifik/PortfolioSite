import preferredRemValueAndSlopeVw from "../../preferredRemValueAndSlope";

export default function DescriptionParagraph({paragraph}: {paragraph: string}) {
	const minRem = .6;
	const maxRem = 2;
	const [preferredRem, slopeVw] = preferredRemValueAndSlopeVw(minRem, maxRem); 

	return <p className="
		text-projects-white
		mb-3
		2xl:mb-6
		" style={{ fontSize : `clamp(${minRem}rem, ${preferredRem}rem + ${slopeVw}vw, ${maxRem}rem)` }}>
		{paragraph}
	</p>

}
