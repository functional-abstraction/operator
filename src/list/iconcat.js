export function iconcat(a, b) {
	const len = b.length;

	for (let i = 0; i < len; ++i) {
		a.push(b[i]);
	}

	return a;
}
