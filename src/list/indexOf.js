
var indexOf = function (a, b) {
	var i, len;

	len = a.length;

	for (i = 0; i < len; ++i) {
		if (b === a[i]) {
			return i;
		}
	}

	return -1;
};

exports.indexOf = indexOf;
