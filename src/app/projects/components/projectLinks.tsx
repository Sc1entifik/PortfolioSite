import Link from "next/link";

export default function ProjectResources({githubLink, projectLink}:{githubLink: string, projectLink?: string}) {
	return (
		<div className="flex justify-between gap-4 min-h-[4ch] max-w-[1536px] w-[inherit] my-1 mx-2 text-[.65rem] xsphone:text-xs xs:text-[.8rem] sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
			<div className="max-w-[26rem] bg-projects-white text-projects-black flex justify-center items-center">
				<p className="px-3 text-center">SCROLL FOR MORE SOFTWARE</p>
			</div>
			<div className="flex justify-between xl:flex-col xl:justify-start xl:gap-y-4 ">
				<Link href={githubLink} target="_blank" rel="noopener noreferrer">Check Out Project Code Here!</Link>
				{projectLink && <Link href={projectLink} target="_blank" rel="noopener noreferrer">Check Out App Website Here!</Link>}
			</div>
		</div>
	);
}
