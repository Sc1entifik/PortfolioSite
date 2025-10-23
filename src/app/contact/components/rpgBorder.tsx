import { ReactNode } from "react";

export default function RpgBorder({ children }: {children: ReactNode}) {
	return (
		<div className="flex flex-col flex-1 justify-between item-start rounded-md border-4 border-white border-solid text-white bg-ff7-menu">
			{children}
		</div>
	);
}
