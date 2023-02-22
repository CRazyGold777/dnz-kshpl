export const howLength = (pLength, countLength) => {
	let length = 0
	if (pLength) {
		if (countLength < pLength) {
			length = countLength;
		}
		else {
			length = pLength;
		}
	}
	else {
		length = countLength;
	}
	return length;
}