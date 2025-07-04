//import Image from "next/image";
import CrtImage from "./crtImage";

export default function ProjectImages({imagePath1, imagePath2, imagePath3} : {imagePath1: string, imagePath2: string, imagePath3: string}) {
	return (
		<div className="flex flex-col justify-center gap-y-16 items-center w-[30%]">
			{
			/*
			<Image src={imagePath1} alt="project screenshot" width={400} height={300} style={{width: "80%", height: "auto"}} className="rounded-md" />
			<Image src={imagePath2} alt="project screenshot" width={400} height={300} style={{width: "80%", height: "auto"}} className="rounded-md" />
			<Image src={imagePath3} alt="project screenshot" width={400} height={300} style={{width: "80%", height: "auto"}} className="rounded-md" />
			*/
			}
			<CrtImage src={imagePath1} />
			<CrtImage src={imagePath2} />
			<CrtImage src={imagePath3} />
		</div>
	);
}
