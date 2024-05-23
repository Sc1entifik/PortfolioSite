export class Captcha {
	#validationCode = "!36_fFke,NveKOVvm893v53RbSeQbxSeINlVLo90%42KnNqWRTfQ";
	#captchaPhrase;


	#characterPool() {
		const alphaLower = "abcdefghijklmnopqrstuvwxyz";
		const alphaUpper = alphaLower.toUpperCase();
		const numbers = "0123456789";

		return alphaLower + alphaUpper + numbers;
	}


	#randomPhrase() {
		const characterPool = this.#characterPool();
		const minLength = 7;
		const maxLength = 22;
		let phraseLength = 0;
		let randomPhrase = "";

		while (phraseLength < minLength) phraseLength = Math.floor(Math.random() * maxLength);

		for (let i = 0; i < phraseLength; i++) {
			const randomIndex = Math.floor(Math.random() * characterPool.length);
			randomPhrase += characterPool[randomIndex];
		}

		return randomPhrase;
	}


	#optionsObject(answer) {
		const submissionBody = {"postPass": this.#validationCode, "captchaPhrase": this.#captchaPhrase, "userResponse": answer};

		return {
			method: "POST",
			headers: {"Content-Type": "application/json",},
			body: JSON.stringify(submissionBody),
		};
	}


	generateCaptcha(canvasObject, width, height) {
		this.#captchaPhrase = this.#randomPhrase();
		const adjustedWidth = width/1000;
		const adjustedHeight = height/2;
		const canvasText = this.#captchaPhrase.split("").join(String.fromCharCode(8201)); //The split and join statements add space between the characters.
		canvasObject.fillText(canvasText, adjustedWidth, adjustedHeight);
	}


	submitCaptchaValidation(formObject) {
		const answer = formObject.elements["answer"].value;
		const options = this.#optionsObject(answer);

		fetch("/captcha", options);

		formObject.elements["submit"].disabled = true;
		formObject.elements["refresh"].disabled = true;
		formObject.reset();
	}
}
