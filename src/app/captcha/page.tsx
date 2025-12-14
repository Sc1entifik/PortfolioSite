import RobotHeader from "./components/robotHeader";
import HomeLink from "./components/homeLink";
import CaptchaElements from "./components/captchaElements";
import { Suspense } from "react";

export default async function Captcha() {

	return (
		<div className="flex flex-col items-center justify-between h-dvh gap-10 p-2">
			<RobotHeader/>
			<Suspense fallback={<p>Loading...</p>}>
				<CaptchaElements/>
			</Suspense>
			<HomeLink/>
		</div>
	)
}
