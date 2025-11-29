import preferredRemValueAndSlopeVw from "@/utils/preferredRemValueAndSlope";

export default function RobotHeader() {
	const minRem = 1.5;
	const maxRem = 2.8;
	const [preferredRem, slopeVw] = preferredRemValueAndSlopeVw(minRem, maxRem);

	return <h2 className="max-w-[80dvw] text-dos-green" style={{fontSize: `clamp(${minRem}rem, ${preferredRem}rem + ${slopeVw}vw, ${maxRem}rem)`}}>I need to make sure you are not a robot before I contact you</h2>
}
