export default function ProjectTitleAndDescription({title, header, description} : {title : string, header: string, description: string}) {

	return (
		<div className="flex flex-col w-[70%] gap-y-3">
			<h1 className="text-projects-titleRed text-[1.75rem] xs:text-3xl sm:text-6xl lg:text-7xl xl:text-[5rem]">{title}</h1>
			<div>
				<h2 className="text-projects-headerRed text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">{header}</h2>
				{
					description.split("\\n")
					.map((paragrahs, i) =>
						<p
							key={i}
							className="text-projects-white my-2 text-[.6rem] xs:text-[.67rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
							>{ paragrahs }</p>
					)
				}
			</div>
		</div>
	);
}
