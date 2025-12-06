import preferredRemValueAndSlopeVw from "@/utils/preferredRemValueAndSlope";

export default function RobotHeader() {
	const minRem = 1.5;
	const maxRem = 3;
	const [preferredRem, slopeVw] = preferredRemValueAndSlopeVw(minRem, maxRem);

	return <h1 className="pl-4 mt-4 text-dos-lightGray" style={{ fontSize:`clamp(${minRem}rem, ${preferredRem}rem + ${slopeVw}dvw, ${maxRem}rem)` }}>You Made A Typo Or Are Some Sort Of Robot!</h1>
}
