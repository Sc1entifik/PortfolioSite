import RouteHeader from "@/components/routeHeader";

export default function ProjectsLayout({ children }: {children: React.ReactNode}) {
	return (
		<div className="flex flex-col w-full min-h-dvh overflow-hidden bg-projects-backgroundNavy">
			<header className="
				bg-projects-backgroundNavy
				text-dos-lightGray
				mt-1
				mb-3
				mx-1
				md:mx-2
				2xl:mx-4
				2xl:mt-2
				2xl:mb-6
				text-[.55rem]
				xsphone:text-[.65rem]
				xs:text-xs
				2xl:text-xl
				">
				<RouteHeader/>
			</header>
			<main className="flex flex-1 flex-col">{children}</main>
		</div>
	);
}
