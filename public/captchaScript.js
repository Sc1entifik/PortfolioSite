import {Captcha} from "./captchaClass.mjs";


const captchaText = document.getElementById("captcha");
const form = document.getElementById("validate");
const submitButton = document.getElementById("submit");
const refreshButton = document.getElementById("refresh");
let captchaObject = new Captcha();
let canvasObject = captchaText.getContext("2d");
canvasObject.font = "20px steam-punk";
canvasObject.fillStyle = "hsl(109, 85%, 55%)";



function generateCaptcha() {
	canvasObject.clearRect(0, 0, captchaText.width, captchaText.height);
	captchaObject.generateCaptcha(canvasObject, captchaText.width, captchaText.height);
}


function preventSubmission(e) {
	e.preventDefault();
}


function submissionEvent() {
	captchaObject.submitCaptchaValidation(form);
}


generateCaptcha();
form.onsubmit = preventSubmission;
refreshButton.onclick = generateCaptcha;
submitButton.onclick = submissionEvent;
