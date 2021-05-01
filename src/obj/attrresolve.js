const attrresolve = (obj, attr) => {
	const parts = attr.split('.');

	const len = parts.length;

	for (let i = 0; i < len; ++i) {
		const name = parts[i];
		obj = obj[name];
	}

	return obj;
};

export default attrresolve;
