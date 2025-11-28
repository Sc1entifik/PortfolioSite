"use client";

import PortfolioSnapHeader from "./portfolioSnapHeader";
import PortfolioSnapElement from "./portfolioSnapElement";
import { Project, projects } from "./data/projects";
import { useHeaderHeight } from "./hooks/useHeaderHeight";
import { useScrollTransition } from "./hooks/useScrollTransition";
import { useEffect } from "react";

export default function Projects() {
	const [headerRef, headerHeight] = useHeaderHeight();
	const scrollRef = useScrollTransition();
	const portfolioProjects = projects.map((x: Project, i: number) => <PortfolioSnapElement key={i} portfolioProject={x} headerHeight={headerHeight}/>);

	useEffect(() => {
		//projects-backgroundNavy color being applied to the entire background for this route using the body element. 
		document.body.style.backgroundColor = "hsl(220, 60%, 10%)"; 

		return () => {
			document.body.style.backgroundColor = "";
		};
	},[]);

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
