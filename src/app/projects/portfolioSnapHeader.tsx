import RouteHeader from "@/components/routeHeader";
import preferredRemValueAndSlopeVw from "./preferredRemValueAndSlope";

export default function PortfolioSnapHeader() {
	const minRem = .55;
	const maxRem = 2;
	const [preferredRem, slopeVw] = preferredRemValueAndSlopeVw(minRem, maxRem);

	return (
		<div className="
			text-dos-lightGray
			mt-1
			mb-3
			mx-1
			md:mx-2
			2xl:mx-2
			2xl:mt-2
			2xl:mb-6
		"

		style={{ fontSize: `clamp(${minRem}rem, ${preferredRem}rem + ${slopeVw}vw, ${maxRem}rem)` }}
		>
			<RouteHeader/>
		</div>

	);
}
