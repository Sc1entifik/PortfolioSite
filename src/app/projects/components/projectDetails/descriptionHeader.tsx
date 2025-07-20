export default function DescriptionHeader({descriptionHeader}: {descriptionHeader: string}) {
	return <h2 className="
		text-projects-headerRed
		text-sm
		xs:text-base
		sm:text-lg
		md:text-xl
		lg:text-2xl
		xl:text-3xl
		2xl:text-4xl
	">
		{descriptionHeader}
	</h2>
}
