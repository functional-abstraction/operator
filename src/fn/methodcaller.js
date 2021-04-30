
export function methodcaller (name) {

	var args, caller;

	args = Array.prototype.slice.call(arguments, 1);

	caller = function (obj) {
		return obj[name].apply(obj, args);
	};

	return caller;
}

