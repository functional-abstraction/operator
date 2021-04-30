import test from 'ava';
import * as operator from '../../../../src/index.js';

test( "irshift", t => {

	var a, b, i, n;

	n = 10;

	for (i = 0; i < n; ++i) {
		a = Math.floor(Math.random() * Math.pow(2, 32));
		b = Math.floor(Math.random() * 32);
		t.deepEqual(operator.irshift(a, b), a = a >>= b, "a = " + a + " >>= " + b);
	};

});
