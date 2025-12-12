import { useEffect, useRef, useState } from "react";

export function useHeaderHeight(): [headerRef: React.RefObject<HTMLDivElement | null>, headerHeight: number] {
	const headerRef = useRef<HTMLDivElement>(null);
	const [headerHeight, setHeaderHeight] = useState(0);

	useEffect(() => {
		const updateHeaderHeight = () => {
			if (headerRef.current) {
				setHeaderHeight(headerRef.current!.offsetHeight)
			}
		};

		updateHeaderHeight();
		window.addEventListener("resize", updateHeaderHeight);
		return () => window.removeEventListener("resize", updateHeaderHeight);
		},[]);

	return [headerRef, headerHeight];
}
