import ContactRadioButton from "./contactRadioButton";

export default function ContactRadioForm({onSelectionChange, initialSelection}: {onSelectionChange: (value: string) => void, initialSelection: string}) {
	const radioOptions = [ 
		{ value:"Coffee Chat", id:"coffee-chat" }, 
		{ value:"Talk To Me About One Of My Projects", id:"project-chat" }, 
		{ value:"Talk To Me About Working On One Of Your Projects.", id:"project-collaboration" },	
		{ value:"Hiring Me For A Project Or A Dev Position", id:"job-discussion" }
	]
	.map(x => <ContactRadioButton key={x.id} value={x.value} id={x.id} isSelected={initialSelection}onChange={onSelectionChange}/>);

	return (
		<form className="flex flex-col gap-2 py-1 pl-20 list-none">
			{radioOptions}
		</form>
	);
}
