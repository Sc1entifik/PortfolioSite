import { useRef } from "react";
import RpgBorder from "./rpgBorder";
import Link from "next/link";
import { ExternalSiteMap } from "@/utils/externalSiteMap";

export default function AudioCredits() {
	const inputRef = useRef<HTMLElement>(null);

	return (
		<div className="flex w-[40%]">
		<RpgBorder onClick={ () => inputRef.current?.focus() }>
				<div className="py-2 pl-8">
					<Link target="_blank" href={ ExternalSiteMap.CuriousCrittersSong }>
						<p>Music by Matthew Pablo</p>
						<p>Song: Curious Critters</p>
					</Link>
					<Link target="_blank" href={ ExternalSiteMap.CreativeCommonsV3 }>
						<p>License: Creative Commons 3.0 License</p>
					</Link>
				</div>

				<div className="py-2 pl-8 mb-20">
					<Link target="_blank" href={ ExternalSiteMap.RetroRpgMenuSounds }>
						<p>Sound Effects by Leohpaz</p>
						<p>Source: 10 Retro RPG Menu Sounds</p>
					</Link>
					<Link target="_blank" href={ ExternalSiteMap.CreativeCommonsV4 }>
						<p>License: Creative Commons 4.0 License</p>
					</Link>
				</div>
		</RpgBorder>
		</div>
	);
}
