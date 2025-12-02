import LandingPageHeader from "./components/landingPageHeader/landingPageHeader";
import MenuOptions from "./components/menuOptions";

export default function Home() {
	return (
		<div className="flex flex-col justify-between h-dvh w-full text-[.8rem] xs:text-[1rem] sm:text-[1.37rem] md:text-[1.68rem] lg:text-[2rem] overflow-hidden">
			<LandingPageHeader/>
			<MenuOptions/>
			<p className="mb-1">{'>'} Enter Your Selection</p>
		</div>
	);
}
