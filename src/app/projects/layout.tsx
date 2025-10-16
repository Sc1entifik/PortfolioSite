export default function ProjectsLayout({ children }: {children: React.ReactNode}) {

	return (
		<div className="bg-projects-backgroundNavy">
			<main>{children}</main>
		</div>
	);
}
