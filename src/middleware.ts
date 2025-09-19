import { NextRequest, NextResponse } from "next/server";
import generateEncryptedCaptchaString from "./utils/generateCaptchaTest";

export async function middleware(_request: NextRequest) {
	const isProduction = process.env.RUNTIME_ENVIRONMENT === "production";
	const encryptedCaptchaText = await generateEncryptedCaptchaString() 
	const response = NextResponse.next();
	response.cookies.set({name: "captchaTest", value: encryptedCaptchaText, httpOnly: true, secure: isProduction, sameSite: "strict", expires: new Date(Date.now() + 1000 * 60 * 6)}); // expiration time created in line to keep time from ticking down due to await call.

	return response;
}

export const config = {
	matcher: "/contact",
};
