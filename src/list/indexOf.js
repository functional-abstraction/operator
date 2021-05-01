const indexOf = (a, b) => {
	const len = a.length;

	for (let i = 0; i < len; ++i) {
		if (b === a[i]) {
			return i;
		}
	}

	return -1;
};

export default indexOf;
