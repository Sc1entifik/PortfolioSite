import ProjectDetails from "./components/projectDetails/projectDetails";
import ProjectImages from "./components/projectImages/projectImages";
import ProjectResources from "./components/projectResources/projectResources";
import { Project } from "./data/projects";

export default function PortfolioSnapElement({ portfolioProject, headerHeight }: {portfolioProject: Project, headerHeight: number}) {
	return (
		<div 
			className="
			flex 
			flex-col 
			overflow-y-auto 
			items-center 
			justify-between 
			snap-start 
			no-scrollbar
			opacity-100" 
			style={{ height: `calc(100vh - ${headerHeight}px)` }}>
			<div className="flex mx-3 max-w-[1536px]">
				<ProjectDetails title={portfolioProject.title} descriptionHeader={portfolioProject.descriptionHeader} description={portfolioProject.description}/>
				<ProjectImages imagePath1={portfolioProject.image1} imagePath2={portfolioProject.image2} imagePath3={portfolioProject.image3}/>
			</div>
			<ProjectResources githubLink={portfolioProject.githubLink} projectLink={portfolioProject.projectLink} />
		</div>
	);
}
