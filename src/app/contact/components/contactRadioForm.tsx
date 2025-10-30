import ContactRadioButton from "./contactRadioButton";
import { useMenuSound } from "./hooks/useMenuSound";

export default function ContactRadioForm({onSelectionChange, initialSelection}: {onSelectionChange: (value: string) => void, initialSelection: string}) {
	const playSoundEffect = useMenuSound("/audio/001_Hover_01.wav");

	const radioOptions = [ 
		{ value:"Hiring Me For A Project Or A Dev Position", id:"job-discussion" },
		{ value:"Talk To Me About Working On One Of Your Projects", id:"project-collaboration" },	
		{ value:"Talk To Me About One Of My Projects", id:"project-chat" }, 
		{ value:"Coffee Chat", id:"coffee-chat" } 
	]
	.map(x => <ContactRadioButton key={x.id} value={x.value} id={x.id} isSelected={initialSelection} onChange={() => {
		onSelectionChange(x.value);
		playSoundEffect();
	}
	}/>);

	return (
		<form className="flex flex-col gap-2 py-1 pl-20 list-none">
			{radioOptions}
		</form>
	);
}
