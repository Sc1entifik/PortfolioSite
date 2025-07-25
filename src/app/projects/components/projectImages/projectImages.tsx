import CrtImage from "./crtImage";

export default function ProjectImages({imagePath1, imagePath2, imagePath3} : {imagePath1: string, imagePath2: string, imagePath3: string}) {
	return (
		<div className="flex flex-col justify-evenly gap-y-5 items-center w-fit">
			<CrtImage src={imagePath1} />
			<CrtImage src={imagePath2} />
			<CrtImage src={imagePath3} />
		</div>
	);
}
