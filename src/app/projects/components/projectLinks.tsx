import Link from "next/link";

export default function ProjectResources({githubLink, projectLink}:{githubLink: string, projectLink?: string}) {
	return (
		<div className="flex h-1/6 gap-3 text-xs justify-between mx-2 mb-1">
			<div className="bg-projects-white text-projects-black flex justify-center items-center">
				<p>SCROLL FOR MORE SOFTWARE</p>
			</div>
			<Link href={githubLink}>Check Out Project Code Here!</Link>
			{projectLink && <Link href={projectLink}>Check Out App Website Here!</Link>}
		</div>
	);
}
