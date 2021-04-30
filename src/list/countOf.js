export function countOf(a, b) {
	let n = 0;
	const len = a.length;

	for (let i = 0; i < len; ++i) {
		if (b === a[i]) {
			++n;
		}
	}

	return n;
}
