"use client"
import { useKeydownRouting } from "@/hooks/useKeydownRouting";
import { SiteMap } from "@/utils/siteMap";
import Link from "next/link";

export default function MenuOptions() {
	useKeydownRouting()

	return (
	<div className="flex flex-col space-y-3">
		<Link href={SiteMap.Home}>[1] Main Menu</Link>
		<Link href={SiteMap.Projects}>[2] Projects</Link>
		<Link href={SiteMap.Contact}>[3] Contact Me</Link>
		<Link href={SiteMap.Tutorial}>[4] Tutorial</Link>
	</div>
	);
}
