
var attrgetter = function () {
	var len, attr, g, args;

	args = arguments;

	len = args.length;

	if (len === 0) {
		g = noop;
	}
	else if (len === 1) {
		attr = args[0];

		g = function (obj) {
			return attrresolve(obj, attr);
		};
	}
	else {
		g = function (obj) {
			var i, tuple;

			tuple = [];

			for (i = 0; i < len; ++i) {
				tuple.push(attrresolve(obj, args[i]));
			}

			return tuple;
		};
	}

	return g;
};

exports.attrgetter = attrgetter;
