export function contains(a, b) {
	const len = a.length;

	for (let i = 0; i < len; ++i) {
		if (b === a[i]) {
			return true;
		}
	}

	return false;
}
