import Link from "next/link";
import SoftwareScrollBanner from "./softwareScrollBanner";
import ProjectLinks from "./projectLinks";

export default function ProjectResources({githubLink, projectLink}:{githubLink: string, projectLink?: string}) {
	return (
		<div className="
			flex
			justify-between
			gap-4
			min-h-[4ch]
			max-w-[1536px]
			w-[inherit]
			mb-1
			mx-2
			text-[.65rem]
			xsphone:text-xs
			xs:text-[.8rem]
			sm:text-base
			lg:text-lg
			xl:text-xl
			2xl:text-2xl
			">
			<SoftwareScrollBanner/>
			<ProjectLinks githubLink={githubLink} projectLink={projectLink}/>
		</div>
	);
}
