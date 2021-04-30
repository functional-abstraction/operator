import test from 'ava';
import * as operator from '../../../../src';

test( "ipow", t => {

	var a, b, i, n;

	n = 10;

	for (i = 0; i < n; ++i) {
		a = Math.random();
		b = Math.random();
		t.deepEqual(operator.ipow(a, b), a = Math.pow(a, b), "a = Math.pow(" + a + ", " + b + ")");
	};

});
