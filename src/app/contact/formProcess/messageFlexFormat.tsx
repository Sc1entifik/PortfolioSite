import { ReactNode } from "react";

export default function MessageFlexFormat({ children }: { children: ReactNode }) {
	return (
		<div className="h-dvh flex justify-center items-center">
			<div className="w-1/2">
				{children}
			</div>
		</div>

	);

}
