import DescriptionHeader from "./descriptionHeader";
import DescriptionParagraph from "./descriptionParagraph";
import TitleHeader from "./titleHeader";

export default function ProjectDetails({title, descriptionHeader, description} : {title : string, descriptionHeader: string, description: string}) {

	return (
		<div className="flex flex-col grow gap-y-3">
			<TitleHeader title={title}/>

			<div>
				<DescriptionHeader descriptionHeader={descriptionHeader}/>
				{
					description.split("\n")
					.map((paragraph, i) => <DescriptionParagraph key={i} paragraph={paragraph}/>)
				}
			</div>
		</div>
	);
}
