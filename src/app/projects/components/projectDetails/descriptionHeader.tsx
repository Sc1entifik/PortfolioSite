import preferredRemValueAndSlopeVw from "@/utils/preferredRemValueAndSlope";

export default function DescriptionHeader({descriptionHeader}: {descriptionHeader: string}) {
	const minRem = .87;
	const maxRem = 2.25;
	const [preferredRemValue, slopeVw] = preferredRemValueAndSlopeVw(minRem, maxRem); 

	return <h2 className="
		text-projects-headerRed
		text-[clamp(.4rem,1.65vw,3.35rem)]
	" style={{ fontSize: `clamp(${minRem}rem, ${preferredRemValue}rem + ${slopeVw}vw, ${maxRem}rem)` }}>
		{descriptionHeader}
	</h2>
}
