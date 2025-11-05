import { useRef } from "react";
import RpgBorder from "./rpgBorder";

export default function TextInputForm({ inputPrompt ,onChange }: { inputPrompt: string, onChange: (x: string) => void }) {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<RpgBorder onClick={ () => inputRef.current?.focus() }>
			<p className="py-1 pl-8">{ inputPrompt }</p>
			<input ref={inputRef} type="text" required onChange={(e) => onChange(e.target.value)} className="py-1 pl-8 mb-32 caret-white bg-transparent outline-none caret-blink" />
		</RpgBorder>
	);
}

