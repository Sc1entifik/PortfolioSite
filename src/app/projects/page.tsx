"use client";

import { useEffect, useRef, useState } from "react";
import ProjectDetails from "./components/projectDetails/projectDetails";
import ProjectResources from "./components/projectResources/projectResources";
import ProjectImages from "./components/projectImages/projectImages";
import PortfolioSnapHeader from "./portfolioSnapHeader";
import { Project, projects } from "./data/projects";
import PortfolioSnapElement from "./portfolioSnapElement";

export default function Projects() {
	const headerRef = useRef<HTMLDivElement>(null);
	const [headerHeight, setHeaderHeight] = useState(0);
	/*
	useEffect(() => {
		const oldBackgroundColor = document.body.style.backgroundColor;
		document.documentElement.style.backgroundColor = "hsl(220, 60%, 10%)";
		document.body.style.backgroundColor = "hsl(220, 60%, 10%)";

		return () => {
			document.documentElement.style.backgroundColor = oldBackgroundColor;
			document.body.style.backgroundColor = oldBackgroundColor;
		};
		},[]);
	*/

	useEffect(() => {
		const updateHeaderHeight = () => {
			if (headerRef.current) {
				setHeaderHeight(headerRef.current.offsetHeight);
			}
		};


		updateHeaderHeight();
		window.addEventListener("resize", updateHeaderHeight);

		return () => window.removeEventListener("resize", updateHeaderHeight);
	});

	const portfolioProjects = projects.map((x: Project, i: number) => <PortfolioSnapElement key={i} portfolioProject={x} headerHeight={headerHeight}/>);

	return (
		<div className="h-screen flex flex-col">
			<div ref={headerRef}>
				<PortfolioSnapHeader/>
			</div>
			<div className="flex-1 overflow-y-scroll no-scrollbar snap-y snap-mandatory">
				{portfolioProjects}
			</div>
		</div>

	);
}
