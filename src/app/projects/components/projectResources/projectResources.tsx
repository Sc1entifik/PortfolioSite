import SoftwareScrollBanner from "./softwareScrollBanner";
import ProjectLinks from "./projectLinks";
import preferredRemValueAndSlopeVw from "@/utils/preferredRemValueAndSlope";

export default function ProjectResources({githubLink, projectLink}:{githubLink: string, projectLink?: string}) {
	const minRem = .48
	const maxRem = 2 
	const [preferredRem, slopeVw] = preferredRemValueAndSlopeVw(minRem, maxRem); 

	return (
		<div 
			className="
			flex
			justify-between
			gap-4
			min-h-[5ch]
			w-9/10
			sm:w-4/5
			mb-1
			"

			style={{fontSize: `clamp(${minRem}rem, ${preferredRem}rem + ${slopeVw}vw, ${maxRem}rem)`}}
			>
			<SoftwareScrollBanner/>
			<ProjectLinks githubLink={githubLink} projectLink={projectLink}/>
		</div>
	);
}
