import { SiteMap } from "@/utils/siteMap";
import { useEffect } from "react";

function useKeydownRouting() {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			const keyValue = e.key;

			switch(keyValue) {
				case "1":
					window.location.href = SiteMap.Home;
					break;

				case "2":
					window.location.href = SiteMap.Projects;
					break;

				case "3":
					window.location.href = SiteMap.Contact;
					break;
			}
		};

		document.addEventListener("keydown", handleKeyDown);

	return () => document.removeEventListener("keydown", handleKeyDown);
	}, []);
}

export { useKeydownRouting };
