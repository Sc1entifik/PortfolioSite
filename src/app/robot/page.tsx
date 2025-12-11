import { MediaMap } from "@/utils/mediaMap";
import Image from "next/image";
import RobotHeader from "./robotHeader";
import CaptchaLink from "./captchaLink";
import RandomRobotWrapper from "./randomRobotWrapper";

export default function YouMightBeARobot() {
	const funnyRobotPics = [MediaMap.DALEK, MediaMap.ROSIE, MediaMap.DARPA_TINY_ROBOT,MediaMap.JOHNNY_FIVE, MediaMap.ROOMBA, MediaMap.BENDER];
	const randomIndex = Math.floor(Math.random() * funnyRobotPics.length);
	const randomRobotPic = <Image src={funnyRobotPics[randomIndex]} alt="funny robot picture" width={400} height={300} className="snap-center mb-2 h-full w-auto" />;
	

	return (
		<div className="flex flex-col justify-between items-center max-w-prose h-screen mx-auto">
			<RobotHeader/>
			<RandomRobotWrapper>
				{randomRobotPic}
			</RandomRobotWrapper>
			<CaptchaLink/>
		</div>
	);
}
