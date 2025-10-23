"use client";

import { useState } from "react";
import Congratulations from "./congratulations";
import RpgBorder from "./rpgBorder";
import ContactRadioForm from "./contactRadioForm";

export default function FfContactForm() {
	const [contactReason, setContactReason] = useState("Coffee Chat");
	
	return (
		<div className="flex flex-col h-[98vh] w-[99%] pt-2 m-auto gap-2 justify-around bg-black">
			<RpgBorder>
				<Congratulations/>
				<ContactRadioForm onSelectionChange={setContactReason} initialSelection={contactReason}/>
			</RpgBorder>

			<div className="flex flex-1 gap-2">
			<RpgBorder>
				<p className="py-1 pl-8">What is your name?</p>
			</RpgBorder>
			
			<RpgBorder>
				<p className="py-1 pl-8">What is your email address?</p>
			</RpgBorder>
			</div>

			<RpgBorder>
				<p className="py-1 pl-8">Leave me a short message</p>
			</RpgBorder>
		</div>
	);
}
