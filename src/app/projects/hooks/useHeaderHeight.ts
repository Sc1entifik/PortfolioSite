import { useEffect, useRef, useState } from "react";

export function useHeaderHeight() {
	const headerRef = useRef<HTMLDivElement>(null);
	const [headerHeight, setHeaderHeight] = useState(0);

	useEffect(() => {
		const updateHeaderHeight = () => setHeaderHeight(headerRef.current!.offsetHeight);

		window.addEventListener("resize", updateHeaderHeight);
		return () => window.removeEventListener("resize", updateHeaderHeight);
		},[]);

	return [headerRef, headerHeight];
}
