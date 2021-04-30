
export function iconcat (a, b) {
	var i, len;

	len = b.length;

	for (i = 0; i < len; ++i) {
		a.push(b[i]);
	}

	return a;
}

