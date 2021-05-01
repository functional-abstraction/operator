const ifloordiv = (a, b) => {
	// eslint-disable-next-line no-return-assign
	return (a = (a / b) | 0);
};

export default ifloordiv;
