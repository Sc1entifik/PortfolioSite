import { createCanvas } from "canvas";
import ClampSizedImage from "./clampSizedImage";

export default function CaptchaCanvas({captchaText}: {captchaText: string} ) {
	const width = 300;
	const height = 130;
	const canvas = createCanvas(width, height);
	const ctx = canvas.getContext('2d');
	ctx.fillStyle = "#f0f0f0";
	ctx.fillRect(0, 0, width, height);

	for (let i=0; i<50; i++) {
		ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`;
		ctx.fillRect(Math.random() * width, Math.random() * height, 5, 5);
	}

	ctx.font = "24px Arial";
	ctx.fillStyle = "#000";
	const angle = (Math.random() * 30 - 15) * (Math.PI / 180);
	ctx.translate(20, 65);
	ctx.rotate(angle);
	ctx.fillText(captchaText, 0, 0);
	ctx.rotate(-angle);
	ctx.translate(-20, -65);
	const buffer = canvas.toBuffer("image/png");
	const base64Image = buffer.toString("base64");
	const imageSrc = `data:image/png;base64,${base64Image}`;
	
	return (
		<div>
			<p>{imageSrc}</p>
			<ClampSizedImage src={imageSrc} width={width} height={height}/> 
		</div>
	);	
}
