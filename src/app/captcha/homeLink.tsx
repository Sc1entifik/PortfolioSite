import Link from "next/link";
import preferredRemValueAndSlopeVw from "@/utils/preferredRemValueAndSlope";
import { SiteMap } from "@/utils/siteMap";

export default function HomeLink() {
	const minRem = 1;
	const maxRem = 2;
	const [preferredRem, slopeVw] = preferredRemValueAndSlopeVw(minRem, maxRem);

	return <Link style={{fontSize: `clamp(${minRem}rem, ${preferredRem}rem + ${slopeVw}vw, ${maxRem}rem)`}} href={SiteMap.Home}>Back To Main Menu</Link>
}
