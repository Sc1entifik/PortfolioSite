import preferredRemValueAndSlopeVw from "@/utils/preferredRemValueAndSlope";
import Image from "next/image";

export default function ClampSizedImage({src, width, height} : {src: string, width: number, height: number}) {
	const minRem = 18.75;
	const maxRem = 45;
	const [preferredRem, slopeVw] = preferredRemValueAndSlopeVw(minRem, maxRem);

	return <Image src={src} width={width} height={height} alt="CAPTCHA" className="pointer-events-none" style={{ width:`clamp(${minRem}rem, ${preferredRem}rem + ${slopeVw}vw, ${maxRem}rem)`, height:"auto" }}/>
}
