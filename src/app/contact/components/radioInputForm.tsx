import { useRef } from "react";
import RpgBorder from "./rpgBorder";
import Congratulations from "./congratulations";
import ContactRadioForm from "./contactRadioForm";

export default function RadioInputForm({contactReason, onChange}: {contactReason: string, onChange: (x: string) => void}) {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<RpgBorder onClick={ () => inputRef.current?.focus() }>
			<Congratulations/>
			<ContactRadioForm initialSelection={contactReason} onSelectionChange={onChange} />
		</RpgBorder>
		
	);
}
