const minScreenPx = 320;
const maxScreenPx = 2560;

const preferredRemValueAndSlopeVw = (minRem: number, maxRem: number) => {
	const pxConversion = (remSize: number) => remSize * 16;
	const remConversion = (pxSize: number) => pxSize / 16;
	const maxPxFont = pxConversion(maxRem);
	const minPxFont = pxConversion(minRem);
	const slope = (maxPxFont - minPxFont) / (maxScreenPx - minScreenPx)
	const preferredRemValue = remConversion(minPxFont - (minScreenPx * slope));
	const slopeVW = slope * 100;

	return [preferredRemValue, slopeVW];
}

export default preferredRemValueAndSlopeVw;
