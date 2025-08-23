"use client";

import PortfolioSnapHeader from "./portfolioSnapHeader";
import PortfolioSnapElement from "./portfolioSnapElement";
import { Project, projects } from "./data/projects";
import { useHeaderHeight } from "./hooks/useHeaderHeight";
import { useScrollTransition } from "./hooks/useScrollTransition";

export default function Projects() {
	const [headerRef, headerHeight] = useHeaderHeight();
	const scrollRef = useScrollTransition();
	const portfolioProjects = projects.map((x: Project, i: number) => <PortfolioSnapElement key={i} portfolioProject={x} headerHeight={headerHeight}/>);

	return (
		<div className="h-screen flex flex-col">
			<div ref={headerRef} >
				<PortfolioSnapHeader/>
			</div>
			<div ref={scrollRef} className="flex-1 overflow-y-scroll no-scrollbar snap-y snap-mandatory">
				{portfolioProjects}
			</div>
		</div>

	);
}
