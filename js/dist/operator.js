(function(exports, undefined){

	'use strict';


/* js/src/bool */
/* js/src/bool/and.js */

var and = function (a, b) {
	return a && b;
};

exports.and = and;

/* js/src/bool/not.js */

var not = function (obj) {
	return !obj;
};

exports.not = not;

/* js/src/bool/or.js */

var or = function (a, b) {
	return a || b;
};

exports.or = or;

/* js/src/bool/xor.js */

var xor = function (a, b) {
	return (a || b) && !(a && b);
};

exports.xor = xor;

/* js/src/cast */
/* js/src/cast/truth.js */

var truth = function (obj) {
	return !!obj;
};

exports.truth = truth;

/* js/src/fn */
/* js/src/fn/methodcaller.js */

var methodcaller = function (name) {

	var args, caller;

	args = arguments.slice(1);

	caller = function (obj) {
		return obj[name].apply(obj, args);
	};

	return caller;
};

exports.methodcaller = methodcaller;

/* js/src/fn/noop.js */

var noop = function () {};

exports.noop = noop;

/* js/src/list */
/* js/src/list/concat.js */

var concat = function (a, b) {
	return a.concat(b);
};

exports.concat = concat;

/* js/src/list/contains.js */

var contains = function (a, b) {
	var i, len;

	len = a.length;

	for (i = 0; i < len; ++i) {
		if (b === a[i]) {
			return true;
		}
	}

	return false;
};

exports.contains = contains;

/* js/src/list/countOf.js */

var countOf = function (a, b) {
	var i, len, n;

	n = 0;
	len = a.length;

	for (i = 0; i < len; ++i) {
		if (b === a[i]) {
			++n;
		}
	}

	return n;
};

exports.countOf = countOf;

/* js/src/list/iconcat.js */

var iconcat = function (a, b) {
	var i, len;

	len = b.length;

	for (i = 0; i < len; ++i) {
		a.push(b[i]);
	}

	return a;
};

exports.iconcat = iconcat;

/* js/src/list/indexOf.js */

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

/* js/src/list/len.js */

var len = function (obj) {
	return obj.length;
};

exports.len = len;

/* js/src/num */
/* js/src/num/binary */
/* js/src/num/binary/add.js */

var add = function (a, b) {
	return a + b;
};

exports.add = add;

/* js/src/num/binary/floordiv.js */

var floordiv = function (a, b) {
	return a / b | 0;
};

exports.floordiv = floordiv;

/* js/src/num/binary/iadd.js */

var iadd = function (a, b) {
	return a += b;
};

exports.iadd = iadd;

/* js/src/num/binary/ifloordiv.js */

var ifloordiv = function (a, b) {
	return a = a / b | 0;
};

exports.ifloordiv = ifloordiv;

/* js/src/num/binary/ilshift.js */

var ilshift = function (a, b) {
	return a <<= b;
};

exports.ilshift = ilshift;

/* js/src/num/binary/imod.js */

var imod = function (a, b) {
	return a %= b;
};

exports.imod = imod;

/* js/src/num/binary/imul.js */

var imul = function (a, b) {
	return a *= b;
};

exports.imul = imul;

/* js/src/num/binary/ipow.js */

var ipow = function (a, b) {
	return a = Math.pow(a, b);
};

exports.ipow = ipow;

/* js/src/num/binary/irshift.js */

var irshift = function (a, b) {
	return a >>= b;
};

exports.irshift = irshift;

/* js/src/num/binary/isub.js */

var isub = function (a, b) {
	return a -= b;
};

exports.isub = isub;

/* js/src/num/binary/itruediv.js */

var itruediv = function (a, b) {
	return a /= b;
};

exports.itruediv = itruediv;

/* js/src/num/binary/lshift.js */

var lshift = function (a, b) {
	return a << b;
};

exports.lshift = lshift;

/* js/src/num/binary/mod.js */

var mod = function (a, b) {
	return a % b;
};

exports.mod = mod;

/* js/src/num/binary/mul.js */

var mul = function (a, b) {
	return a * b;
};

exports.mul = mul;

/* js/src/num/binary/pow.js */

exports.pow = Math.pow;

/* js/src/num/binary/rshift.js */

var rshift = function (a, b) {
	return a >> b;
};

exports.rshift = rshift;

/* js/src/num/binary/sub.js */

var sub = function (a, b) {
	return a - b;
};

exports.sub = sub;

/* js/src/num/binary/truediv.js */

var truediv = function (a, b) {
	return a / b;
};

exports.truediv = truediv;

/* js/src/num/bit */
/* js/src/num/bit/AND.js */

var AND = function (a, b) {
	return a & b;
};

exports.AND = AND;

/* js/src/num/bit/IAND.js */

var IAND = function (a, b) {
	return a &= b;
};

exports.IAND = IAND;

/* js/src/num/bit/IOR.js */

var IOR = function (a, b) {
	return a |= b;
};

exports.IOR = IOR;

/* js/src/num/bit/IXOR.js */

var IXOR = function (a, b) {
	return a ^= b;
};

exports.IXOR = IXOR;

/* js/src/num/bit/NOT.js */

var NOT = function (obj) {
	return ~obj;
};

exports.inv = NOT;
exports.invert = NOT;
exports.NOT = NOT;

/* js/src/num/bit/OR.js */

var OR = function (a, b) {
	return a | b;
};

exports.OR = OR;

/* js/src/num/bit/XOR.js */

var XOR = function (a, b) {
	return a ^ b;
};

exports.XOR = XOR;

/* js/src/num/cmp */
/* js/src/num/cmp/eq.js */

var eq = function (a, b) {
	return a == b;
};

exports.eq = eq;

/* js/src/num/cmp/ge.js */

var ge = function (a, b) {
	return a >= b;
};

exports.ge = ge;

/* js/src/num/cmp/gt.js */

var gt = function (a, b) {
	return a > b;
};

exports.gt = gt;

/* js/src/num/cmp/le.js */

var le = function (a, b) {
	return a <= b;
};

exports.le = le;

/* js/src/num/cmp/lt.js */

var lt = function (a, b) {
	return a < b;
};

exports.lt = lt;

/* js/src/num/cmp/ne.js */

var ne = function (a, b) {
	return a != b;
};

exports.ne = ne;

/* js/src/num/unary */
/* js/src/num/unary/abs.js */

exports.abs = Math.abs;

/* js/src/num/unary/neg.js */

var neg = function (obj) {
	return -obj;
};

exports.neg = neg;

/* js/src/num/unary/pos.js */

var pos = function (obj) {
	return +obj;
};

exports.pos = pos;

/* js/src/obj */
/* js/src/obj/attrgetter.js */

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
			return obj[attr];
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

/* js/src/obj/attrresolve.js */

var attrresolve = function (obj, attr) {

	var parts, i, len, name;

	parts = attr.split(".");

	len = parts.length;

    for (i = 0; i < len; ++i) {
    	name = parts[i];
        obj = obj[name];
    }

    return obj;

};

exports.attrresolve = attrresolve;

/* js/src/obj/delitem.js */

var delitem = function (a, b) {
	delete a[b];
};

exports.delitem = delitem;

/* js/src/obj/getitem.js */

var getitem = function (a, b) {
	return a[b];
};

exports.getitem = getitem;

/* js/src/obj/is.js */

var is = function (a, b) {
	return a === b;
};

exports.is = is;

/* js/src/obj/is_not.js */

var is_not = function (a, b) {
	return a !== b;
};

exports.is_not = is_not;

/* js/src/obj/itemgetter.js */

var itemgetter = function () {
	var len, attr, g, args;

	args = arguments;

	len = args.length;

	if (len === 0) {
		g = noop;
	}
	else if (len === 1) {
		attr = args[0];

		g = function (obj) {
			return obj[attr];
		};
	}
	else {
		g = function (obj) {
			var i, tuple;

			tuple = [];

			for (i = 0; i < len; ++i) {
				tuple.push(obj[args[i]]);
			}

			return tuple;
		};
	}



	return g;
};

exports.itemgetter = itemgetter;

/* js/src/obj/setitem.js */

var setitem = function (a, b, c) {
	a[b] = c;
};

exports.setitem = setitem;

})(typeof exports === 'undefined' ? this['operator'] = {} : exports);
