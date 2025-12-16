import RobotHeader from "./components/robotHeader";
import HomeLink from "./components/homeLink";
import CaptchaElements from "./components/captchaElements";

export default async function Captcha() {

	return (
		<div className="flex flex-col items-center justify-between h-dvh gap-10 p-2">
			<RobotHeader/>
			<CaptchaElements/>
			<HomeLink/>
		</div>
	)
}
