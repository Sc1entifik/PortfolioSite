"use client";

import { useKeydownRouting } from "@/hooks/useKeydownRouting";
import { SiteMap } from "@/utils/siteMap";
import Link from "next/link";

export default function RouteHeader() {
	useKeydownRouting();
	
	return (
		<div className="flex justify-between gap-3">
			<div className="flex flex-col">
				<Link href={SiteMap.Home}>[1]</Link>
				<Link href={SiteMap.Home}>Main Menu</Link>
			</div>
			<div className="flex flex-col">
				<Link href={SiteMap.Projects}>[2]</Link>
				<Link href={SiteMap.Projects}>Projects</Link>
			</div>
			<div className="flex flex-col">
				<Link href={SiteMap.Contact}>[3]</Link>
				<Link href={SiteMap.Contact}>Contact Me</Link>
			</div>
			<div className="flex flex-col">
				<Link href={SiteMap.Tutorial}>[4]</Link>
				<Link href={SiteMap.Tutorial}>Tutorial</Link>
			</div>
		</div>
	);
}
