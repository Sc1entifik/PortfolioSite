import LandingPageHeader from "./components/landingPageHeader/landingPageHeader";
import MenuOptions from "./components/menuOptions";

export default function Home() {
	return (
		<div className="flex flex-col justify-between h-dvh w-full text-[15px] sm:text-[22px] md:text-[27px] lg:text-[31px] overflow-hidden">
			<LandingPageHeader/>
			<MenuOptions/>
			<p className="mb-1">{'>'} Enter Your Selection</p>
		</div>
	);
}
