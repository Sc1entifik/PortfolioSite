import preferredRemValueAndSlopeVw from "@/utils/preferredRemValueAndSlope";
import Image from "next/image";

//TransformOrigin is the name of the css rule that allows you to set the diretion that the transformation starts. This is set so that the transformation doesn't get cut off by other elements on the screen etc.
export default function CrtImage({src, transformOrigin}: {src: string, transformOrigin: string}) {
	const minRem = 5.5;
	const maxRem = 21;
	const [preferredRem, slopeVw] = preferredRemValueAndSlopeVw(minRem, maxRem); 

	return (
		<div 
			className="
			transform
			transition-transform
			duration-300
			hover:scale-[3]
			md:hover:scale-[2]
			hover:z-50
			relative
			aspect-4/3
			overflow-hidden
			rounded-[2px]
			sm:rounded-[6px]
			shadow-[inset_0_0_15px_rgba(0,0,0,0.7)]
			border-[.8px]
			sm:border-2
			border-projects-borderGray
			before:absolute
			before:inset-0
			before:bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_40%,rgba(0,0,0,0.9)_80%)]
			before:opacity-20
			before:z-10
			after:absolute
			after:inset-0
			after:content-['']
			after:bg-[repeating-linear-gradient(to_bottom,transparent,transparent_2px,black_2px,black_4px)]
			after:opacity-10
			after:z-20
			"

			style={{
				width : `clamp(${minRem}rem, ${preferredRem}rem + ${slopeVw}vw, ${maxRem}rem)`,
				transformOrigin,
			}}
			>
			<Image
				src={src} 
				alt="project screenshot" 
				className="object-cover z-0" 
				priority
				fill 
			/>
		</div>
	)
}
