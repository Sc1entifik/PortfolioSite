import { forwardRef } from "react";

type Props = { 
	char?: string; 
};

const InvisibleMeasurementDiv = forwardRef<HTMLDivElement, Props>(({char = "@"}, ref) => <div ref={ref} className="invisible absolute pointer-events-none w-fit">{char}</div>);

InvisibleMeasurementDiv.displayName = "InvisibleMeasurementDiv";

export default InvisibleMeasurementDiv;
