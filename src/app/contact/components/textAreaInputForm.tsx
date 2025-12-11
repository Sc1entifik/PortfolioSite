"use client";

import { useRef } from "react";
import RpgBorder from "./rpgBorder";

export default function TextAreaInputForm({ inputPrompt, name }: { inputPrompt: string, name: string}) {
	const inputRef = useRef<HTMLTextAreaElement>(null);
	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			inputRef.current?.form?.requestSubmit();
		}
	}

	return (
		<RpgBorder onClick={ () => inputRef.current?.focus() }>
			<p className="py-1 pl-1 md:pl-2">{ inputPrompt }</p>
			<textarea 
				ref={inputRef} 
				name={name}
				required 
				onKeyDown={handleKeyDown}
				className="flex-1 py-1 pl-1 md:pl-2 mb-14 caret-white bg-transparent outline-none caret-blink no-scrollbar resize-none" ></textarea>
		</RpgBorder>
	);
}
