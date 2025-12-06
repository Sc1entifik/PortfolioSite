import { MediaMap } from "@/utils/mediaMap";
import { SiteMap } from "@/utils/siteMap";
import Image from "next/image";
import Link from "next/link";
import RobotHeader from "./robotHeader";
import CaptchaLink from "./captchaLink";
import RobotPicSnapContainer from "./robotPicSnapContainer";

export default function YouMightBeARobot() {
	const funnyRobotPics = [MediaMap.DALEK, MediaMap.ROSIE, MediaMap.DARPA_TINY_ROBOT,MediaMap.JOHNNY_FIVE, MediaMap.ROOMBA, MediaMap.BENDER]
	.map((x: string, i:number) => <Image key={i} src={x} alt="funny robot picture" width={400} height={300} className="snap-center mb-2" style={{ height:"100%", width:"auto" }}/>);

	return (
		<div className="flex flex-col justify-between items-center max-w-prose h-screen mx-auto">
			<RobotHeader/>
			<RobotPicSnapContainer>
				{funnyRobotPics}
			</RobotPicSnapContainer>
			<CaptchaLink/>
		</div>
	);
}
