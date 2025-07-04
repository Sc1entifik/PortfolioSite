export default function ProjectTitleAndDescription({title, header, description} : {title : string, header: string, description: string}) {

	return (
		<div className="flex flex-col w-[70%] gap-4">
			<h1 className="text-projects-titleRed text-3xl">{title}</h1>
			<div>
				<h2 className="text-projects-headerRed text-sm">{header}</h2>
				{
					description.split("\\n")
					.map((paragrahs, i) =>
						<p
							key={i}
							className="text-projects-white mt-1 mb-6 sm:text-lg text-[.66rem]"
							>{ paragrahs }</p>
					)
				}
			</div>
		</div>
	);
}
