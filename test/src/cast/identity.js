import test from 'ava';
import * as operator from '../../../src';

var one = function (obj, txt) {
	t.deepEqual( operator.identity(obj), obj, "identity " + txt );
};

test( "identity", t => {

	one(0, "0");
	one(null, "null");
	one(undefined, "undefined");

	one(-Math.PI, "-Math.PI");
	one(-1, "-1");
	one(1, "1");
	one(Math.PI, "Math.PI");
	one([], "[]");
	one({}, "{}");
	one(Infinity, "Infinity");
	one(-Infinity, "-Infinity");

});
