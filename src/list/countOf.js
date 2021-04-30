
export function countOf (a, b) {
	var i, len, n;

	n = 0;
	len = a.length;

	for (i = 0; i < len; ++i) {
		if (b === a[i]) {
			++n;
		}
	}

	return n;
}

