
export function contains (a, b) {
	var i, len;

	len = a.length;

	for (i = 0; i < len; ++i) {
		if (b === a[i]) {
			return true;
		}
	}

	return false;
}

