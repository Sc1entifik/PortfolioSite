import LandingPageHeader from "./components/landingHeader"

export default function Home() {
	return (
		<div className="flex flex-col justify-between h-[100dvh] w-[100dvw] text-[.61rem] font-dos text-dos-white m-2">
			<LandingPageHeader numCh={40}/>
		</div>
	);
}
