//import Image from "next/image";
import CrtImage from "./crtImage";

export default function ProjectImages({imagePath1, imagePath2, imagePath3} : {imagePath1: string, imagePath2: string, imagePath3: string}) {
	return (
		<div className="flex flex-col justify-center gap-y-16 items-center w-[30%] 2xl:w-[40%]">
			<CrtImage src={imagePath1} />
			<CrtImage src={imagePath2} />
			<CrtImage src={imagePath3} />
		</div>
	);
}
