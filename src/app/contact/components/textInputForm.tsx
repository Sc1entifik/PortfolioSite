import { useRef } from "react";
import RpgBorder from "./rpgBorder";

export default function TextInputForm({ inputPrompt, name }: { inputPrompt: string, name: string}) {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<RpgBorder onClick={ () => inputRef.current?.focus() }>
			<p className="py-1 pl-8">{ inputPrompt }</p>
			<input 
				ref={inputRef} 
				type="text" 
				name={name}
				required 
				className="py-1 pl-8 mb-32 caret-white bg-transparent outline-none caret-blink" />
		</RpgBorder>
	);
}

