export default function ContactRadioButtons({onSelectionChange, initialSelection}: {onSelectionChange: (value: string) => void, initialSelection: string}) {
	return (
		<form className="flex flex-col gap-2 py-1 pl-1">

			<div>
				<input className="mr-2" type="radio" name="contact-reason" value="Coffee Chat" id="coffee-chat" onChange={e => onSelectionChange(e.target.value)} checked={initialSelection === "Coffee Chat"}/>
				<label htmlFor="coffee-chat">Coffee chat</label>
			</div>

			<div>
				<input className="mr-2" type="radio" name="contact-reason" value="Talk To Me About One Of My Projects" id="project-chat" onChange={e => onSelectionChange(e.target.value)} checked={initialSelection === "Talk To Me About One Of My Projects"}/>
				<label htmlFor="project-chat">Talk to me about one of my projects.</label>
			</div>

			<div>
				<input className="mr-2" type="radio" name="contact-reason" value="Talk To Me About Working On One Of Your Projects" id="project-collaboration" onChange={e => onSelectionChange(e.target.value)} checked={initialSelection === "Talk To Me About Working On One Of Your Projects"} />
				<label htmlFor="project-collaboration">Talk to me about working with you on one of your projects.</label>
			</div>

			<div>
				<input className="mr-2" type="radio" name="contact-reason" value="Hiring Me For A Project Or A Dev Position" id="job-discussion" onChange={e => onSelectionChange(e.target.value)} checked={initialSelection === "Hiring Me For A Project Or A Dev Position"}/>
				<label htmlFor="job-discussion">Hiring me for a dev position or contract job.</label>
			</div>
		</form>
	);
}
