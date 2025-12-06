import preferredRemValueAndSlopeVw from "@/utils/preferredRemValueAndSlope";
import { ReactNode } from "react";

export default function RobotPicSnapContainer({children}: {children: ReactNode}) {
	const minRem = 14;
	const maxRem = 38;
	const [preferredRem, slopeVw] = preferredRemValueAndSlopeVw(minRem, maxRem);

	return <div className="overflow-y-auto snap-y snap-mandatory" style={{ height: `clamp(${minRem}rem, ${preferredRem}rem + ${slopeVw}dvw, ${maxRem}rem)` }}>{children}</div> 
}
