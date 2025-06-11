import { SiteMap } from "@/utils/siteMap";
import Link from "next/link";

export default function MenuOptions() {

	return (
	<div className="flex flex-col space-y-3">
		<Link href={SiteMap.Home}>[1] Main Menu</Link>
		<Link href={SiteMap.Projects}>[2] Tutorial</Link>
		<Link href={SiteMap.Contact}>[3] Contact Me</Link>
	</div>
	);
}
