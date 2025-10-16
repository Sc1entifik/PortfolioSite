"use client";

import { useState } from "react";
import Congratulations from "./congratulations";
import ContactRadioButtons from "./contactRadioButtons";
import RpgBorder from "./rpgBorder";

export default function FfContactForm() {
	const [contactReason, setContactReason] = useState("Coffee Chat");
	
	return (
	<div className="flex flex-col h-[98vh] w-[99%] pt-2 m-auto gap-2 justify-around bg-black">
		<RpgBorder>
			<Congratulations/>
			<ContactRadioButtons onSelectionChange={setContactReason} initialSelection={contactReason}/>
		</RpgBorder>

		<RpgBorder>
			<p className="py-1 pl-1">What is your name?</p>
		</RpgBorder>
		
		<RpgBorder>
			<p className="py-1 pl-1">What is your email address?</p>
		</RpgBorder>

		<RpgBorder>
			<p className="py-1 pl-1">Leave me a short message</p>
		</RpgBorder>

	</div>
);

}
