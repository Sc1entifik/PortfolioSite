import { MediaMap } from "@/utils/mediaMap";
import { SiteMap } from "@/utils/siteMap";
import Image from "next/image";
import Link from "next/link";

export default function YouMightBeARobot() {
	const funnyRobotPics = [MediaMap.DALEK, MediaMap.ROSIE, MediaMap.DARPA_TINY_ROBOT,MediaMap.JOHNNY_FIVE, MediaMap.ROOMBA, MediaMap.BENDER].map((x: string, i:number) => <Image key={i} src={x} alt="funny robot picture" width={400} height={300} className="snap-center mx-2"/>);

	return (
		<div className="flex flex-col justify-between items-center max-w-prose h-screen mx-auto">
			<h1 className="text-4xl mt-4 text-dos-lightGray">You Made A Typo Or Are Some Sort Of Robot!</h1>
			<div className="flex gap-3 overflow-x-auto snap-x my-2">
				{funnyRobotPics}
			</div>
			<Link href={SiteMap.Captcha} className="text-4xl mb-4 text-dos-lightGray">Click Here To Prove Your Humanity!</Link>
		</div>
	);
}
