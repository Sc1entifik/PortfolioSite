import preferredRemValueAndSlopeVw from "@/utils/preferredRemValueAndSlope";
import { SiteMap } from "@/utils/siteMap";
import Link from "next/link";

export default function CaptchaLink() {
	const minRem = 1.5;
	const maxRem = 3;
	const [preferredRem, slopeVw] = preferredRemValueAndSlopeVw(minRem, maxRem);

	return <Link href={SiteMap.Captcha} className="pl-4 mb-4 text-dos-lightGray" style={{ fontSize: `clamp(${minRem}rem, ${preferredRem}rem + ${slopeVw}dvw, ${maxRem}rem)` }}>Click Here To Prove Your Humanity!</Link>
}
