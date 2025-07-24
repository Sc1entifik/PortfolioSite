import SoftwareScrollBanner from "./softwareScrollBanner";
import ProjectLinks from "./projectLinks";
import preferredRemValueAndSlopeVw from "../../preferredRemValueAndSlope";

export default function ProjectResources({githubLink, projectLink}:{githubLink: string, projectLink?: string}) {
	const minRem = .55
	const maxRem = 2 
	const [preferredRem, slopeVw] = preferredRemValueAndSlopeVw(minRem, maxRem); 

	return (
		<div 
			className="
			flex
			justify-between
			gap-4
			min-h-[3ch]
			max-w-[1536px]
			w-[inherit]
			mb-1
			mx-2
			"

			style={{fontSize: `clamp(${minRem}rem, ${preferredRem}rem + ${slopeVw}vw, ${maxRem}rem)`}}
			>
			<SoftwareScrollBanner/>
			<ProjectLinks githubLink={githubLink} projectLink={projectLink}/>
		</div>
	);
}
