import Link from "next/link";

export default function ProjectLinks({githubLink, projectLink}: {githubLink: string, projectLink?: string}) {
	return (
		<div className="
			flex
			md:flex-col
			md:justify-start
			md:gap-y-4
		">
			<Link href={githubLink} target="_blank" rel="noopener noreferrer">Check Out Project Code Here!</Link>
			{projectLink && <Link href={projectLink} target="_blank" rel="noopener noreferrer">Check Out App Website Here!</Link>}
		</div>
	);
}
