export const formatSecondsAsDurationString = (milliSeconds: number) => {
	if (!milliSeconds) {
		return "00:00";
	}
	let seconds = milliSeconds / 1000;
	const getPaddedIntString = (n: string, numDigits: number) => {
		let nPadded = n;
		for (; nPadded.length < numDigits;) {
			nPadded = "0" + nPadded;
		}

		return nPadded;
	};

	let s = "";

	const days = Math.floor(seconds / 3600 / 24);
	if (days >= 1) {
		s += days.toString() + " day" + (days === 1 ? "" : "s") + " + ";
		seconds -= days * 24 * 3600;
	}

	const minutes = Math.floor(seconds / 60);
	s += getPaddedIntString(minutes.toString(), 2) + ":";
	seconds -= minutes * 60;

	s += getPaddedIntString(Math.floor(seconds).toString(), 2);

	return s;
};