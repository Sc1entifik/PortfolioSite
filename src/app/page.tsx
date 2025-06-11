import LandingPageHeader from "./components/landingHeader"
import MenuOptions from "./components/menuOptions";

export default function Home() {
	return (
		<div className="flex flex-col justify-between h-[100dvh] w-[100dvw] text-[.94rem] mx-1 font-dos text-dos-white">
			<LandingPageHeader numCh={25}/>
			<MenuOptions/>
			<p className="mb-2">{'>'} Enter Your Selection</p>
		</div>
	);
}
