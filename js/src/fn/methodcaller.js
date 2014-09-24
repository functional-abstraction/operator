
var methodcaller = function (name) {

	var args, caller;

	args = arguments.slice(1);

	caller = function (obj) {
		return obj[name].apply(obj, args);
	};

	return caller;
};

exports.methodcaller = methodcaller;
