import RouteHeader from "@/components/routeHeader";

export default function ProjectsLayout({ children }: {children: React.ReactNode}) {
	return (
		<div className="flex flex-col w-full min-h-dvh overflow-hidden bg-projects-backgroundNavy">
			<header className="bg-projects-backgroundNavy my-2 mx-1 text-dos-lightGray text-[.55rem] xsphone:text-[.65rem] xs:text-xs">
				<RouteHeader/>
			</header>
			<main className="flex flex-1 flex-col">{children}</main>
		</div>
	);
}
