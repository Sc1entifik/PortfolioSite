import RouteHeader from "@/components/routeHeader";

export default function ProjectsLayout({ children }: {children: React.ReactNode}) {
	return (
		<div>
			<header className="bg-projects-backgroundNavy text-dos-lightGray mx-2 text-[.55rem]">
				<RouteHeader/>
			</header>
			<main>{children}</main>
		</div>
	);
}
