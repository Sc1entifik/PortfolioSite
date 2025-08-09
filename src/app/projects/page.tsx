"use client";

import { useEffect } from "react";
import ProjectDetails from "./components/projectDetails/projectDetails";
import ProjectResources from "./components/projectResources/projectResources";
import ProjectImages from "./components/projectImages/projectImages";

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
		<div className="flex flex-col flex-1 grow items-center justify-between gap-3 h-full w-full">
				<div className="flex mx-3 max-w-[1536px]">
					<ProjectDetails
						title="DFK Summoner Sheet" 
						descriptionHeader="NFT Genetics Precision"
						description="Defi Kingdoms is a popular rpg influenced web-3 game where players collect NFT heros with stats that do jobs, battle, and go on missions on the Defi Kingdoms and Kaia blockchains.\nDFK Summoner Sheet helps players with one of the most complicated aspects of the game. Choosing hero pairs to summon other heros for their collection. Compare multiple summoning pairs for any hero all at once using real time blockchain genetic data from each hero and see all the relevant data neatly displayed on one screen."
					/>
					<ProjectImages imagePath1="/images/dfkSummonerSheet/dfkSummonerSheet1.png" imagePath2="/images/dfkSummonerSheet/dfkSummonerSheet2.png" imagePath3="/images/dfkSummonerSheet/dfkSummonerSheet5cropped.png"/>
				</div>
				<ProjectResources githubLink="https://github.com/Sc1entifik/DFK-SummoningSheet" projectLink="https://scientifik.pythonanywhere.com/"/>
		</div>
	);
}
