import Link from "next/link";

export default function ProjectResources({githubLink, projectLink}:{githubLink: string, projectLink?: string}) {
	return (
		<div className="flex h-1/6 max-w-[1536px] w-[inherit] gap-3 text-xs xs:text-sm lg:text-lg justify-between mx-2 mb-1">
			<div className="bg-projects-white text-projects-black flex justify-center items-center">
				<p className="px-3 text-center">SCROLL FOR MORE SOFTWARE</p>
			</div>
			<div className="flex justify-between 2xl:flex-col 2xl:justify-start 2xl:gap-y-4">
				<Link href={githubLink} target="_blank" rel="noopener noreferrer">Check Out Project Code Here!</Link>
				{projectLink && <Link href={projectLink} target="_blank" rel="noopener noreferrer">Check Out App Website Here!</Link>}
			</div>
		</div>
	);
}
