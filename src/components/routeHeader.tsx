"use client";

import { useKeydownRouting } from "@/hooks/useKeydownRouting";
import { SiteMap } from "@/utils/siteMap";
import Link from "next/link";

export default function RouteHeader() {
	useKeydownRouting();
	
	return (
		<div className="flex justify-between sm:justify-around gap-3">
			<div className="flex flex-col">
				<Link href={SiteMap.Home}>[1]</Link>
				<Link href={SiteMap.Home}>Main Menu</Link>
			</div>
			<div className="flex flex-col">
				<Link href={SiteMap.Projects}>[2]</Link>
				<Link href={SiteMap.Projects}>Projects</Link>
			</div>
			<div className="flex flex-col">
				<Link href={SiteMap.Captcha}>[3]</Link>
				<Link href={SiteMap.Captcha}>Contact Me</Link>
			</div>
		</div>
	);
}
