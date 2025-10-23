export default function ContactRadioButton({value, id, isSelected, onChange}: {value: string, id: string, isSelected: string, onChange: (value: string) => void}) {
	return (
		<div>
			<label className="relative cursor-pointer" htmlFor={id}>
				<input className="peer appearance-none mr-2" type="radio" name="contact-reason" value={value} id={id} onChange={e => onChange(e.target.value)} checked={isSelected === value}/>
				<span 
					className="before:content-['\1F449'] before:opacity-0 peer-checked:before:opacity-100 before:mr-2 before:transition-opacity"
					style={{
					fontFamily:"'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', 'EmojiOne Color'",
					filter: "brightness(0) invert(1)",
				}}
				>
					<span className="font-dos">{value}</span>
				</span>
			</label>
		</div>
	);
}
