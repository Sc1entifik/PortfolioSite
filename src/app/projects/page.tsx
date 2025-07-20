"use client";

import { useEffect } from "react";
import ProjectImages from "./components/projectImages";
import ProjectResources from "./components/projectLinks";
import ProjectTitleAndDescription from "./components/projectTitleAndDescription";

export default function Projects() {
	useEffect(() => {
		const oldBackgroundColor = document.body.style.backgroundColor;
		document.documentElement.style.backgroundColor = "hsl(220, 60%, 10%)";
		document.body.style.backgroundColor = "hsl(220, 60%, 10%)";

		return () => {
			document.documentElement.style.backgroundColor = oldBackgroundColor;
			document.body.style.backgroundColor = oldBackgroundColor;
		};
		},[]);

	return (
		<div className="flex flex-col flex-1 items-center justify-between gap-3 h-full w-full">
				<div className="flex grow mx-3 max-w-[1536px]">
					<ProjectTitleAndDescription
						title="DFK Summoner Sheet" 
						header="NFT Genetics Precision"
						description="Defi Kingdoms is a popular rpg influenced web-3 game where players collect NFT heros with stats that do jobs, battle, and go on missions on the Defi Kingdoms and Kaia blockchains.\nDFK Summoner Sheet helps players with one of the most complicated aspects of the game. Choosing hero pairs to summon other heros for their collection. Compare multiple summoning pairs for any hero all at once using real time blockchain genetic data from each hero and see all the relevant data neatly displayed on one screen."
					/>
					<ProjectImages imagePath2="/images/entryForm2.png" imagePath1="/images/SummonerSheetEntry.png" imagePath3="/images/summonSheet2.png"/>
				</div>
				<ProjectResources githubLink="https://github.com/Sc1entifik/DFK-SummoningSheet" projectLink="https://scientifik.pythonanywhere.com/"/>
		</div>
	);
}
