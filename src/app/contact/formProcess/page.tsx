import { cookies } from "next/headers";
import MessageSuccess from "./messageSuccess";
import MessageFailure from "./messageFailure";
import decryptCaptcha from "@/utils/decryptCaptcha";

export default async function FormProcess() {
	const cookieStore = await cookies();
	const encryptedSuccessMessage = cookieStore.get("messageSuccess")?.value;
	const messageSuccess = encryptedSuccessMessage ? await decryptCaptcha(encryptedSuccessMessage) === "Message Sent Successfully" : false;

	return messageSuccess ? <MessageSuccess/> : <MessageFailure/>;
}
