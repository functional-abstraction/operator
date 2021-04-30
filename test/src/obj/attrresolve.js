import test from 'ava';
import * as operator from '../../../src/index.js';

test( "attrresolve", t => {

	var getter, obj;

	obj = {
		name : "john",
		size : { cm : 170 },
		"size.cm" : 180
	};

	t.deepEqual(operator.attrresolve(obj, "name"), "john", "attrresolve name");

	t.deepEqual(operator.attrresolve(obj, "size.cm"), 170, "attrresolve size.cm");

});
