import Image from "next/image";

export default function CrtImage({src}: {src: string}) {
	return (
		<div className="
			transform
			transition-transform
			duration-300
			hover:scale-[3]
			md:hover:scale-[2]
			hover:z-50
			origin-top-right
			relative
			w-[5.5rem]
			xsphone:w-[6.5rem]
			xs:w-[7.5rem]
			sm:w-36
			md:w-48
			lg:w-56
			xl:w-72
			2xl:w-80
			aspect-[8/7]
			overflow-hidden
			rounded-[6px]
			shadow-[inset_0_0_15px_rgba(0,0,0,0.7)]
			border-[2px]
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
			after:z-20">
			<Image src={src} alt="project screenshot" fill className="object-cover z-0"/>
		</div>
	)
}
