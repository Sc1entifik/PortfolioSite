export class CaptchaGenerator {
	#captchaPhrase;
	#id;

	constructor(canvasWidth, canvasHeight){
		this.width = canvasWidth;
		this.height = canvasHeight;
		this.#captchaPhrase = this.#randomPhrase();
	}


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


	#generateUniqueId(jsonArray) {
		let newId = this.#randomPhrase();
		let matchingElements = jsonArray.filter(x => x.id === newId);

		while (matchingElements.length > 0) {
			newId = this.#randomPhrase();
			matchingElements = jsonArray.filter(x => x.id === newId);
		}

		return newId
	}


	#fontSettings() {
		const fontSizeRatio = .85; //ratio of the font size compared to the captcha sequence length
		const magnifier = 2 //multiplier for pixel value due to pixel value being too small despite values effecting pixel size in the correct manner
		const fontSize = (fontSizeRatio/this.#captchaPhrase.length) * 100;
		const fontRatio = this.width/fontSize;
		const pixelValue = (this.width/fontRatio) * magnifier;
		const fontSettings = `${pixelValue}px sans-serif`;

		return fontSettings;
	}


	#randomRotation() {
		const minDegree = -15;
		const maxDegree = 15;
		const randomDegree = Math.random() * (maxDegree - minDegree) + minDegree;
		const rotationDegree = (randomDegree * Math.PI) / 180;

		return rotationDegree;
	}


	insertJson(jsonArray) {
		this.#id = this.#generateUniqueId(jsonArray);
		jsonArray.push({id:this.#id, captcha:this.#captchaPhrase});
	}


	configureCaptchaCanvas(ctx) {
		ctx.font = this.#fontSettings();
		ctx.textBaseline = "middle";
		ctx.textAlign = "center";
		ctx.fillStyle = "hsl(109, 85%, 55%)";
		ctx.rotate(this.#randomRotation());
		const adjustedWidth = this.width/2;
		const adjustedHeight = this.height/2;
		const canvasText = this.#captchaPhrase.split("").join(String.fromCharCode(8201)); //The split and join statements add space between the characters.
		ctx.fillText(canvasText, adjustedWidth, adjustedHeight);
	}


	get id() {
		return this.#id;
	}

}
