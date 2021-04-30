import test from 'ava';
import * as operator from '../../../../src';

test( "ushift", t => {

	var a, b, i, n;

	n = 10;

	for (i = 0; i < n; ++i) {
		a = Math.floor(Math.random() * Math.pow(2, 32)) - Math.pow(2, 31);
		b = Math.floor(Math.random() * 32);
		t.deepEqual(operator.ushift(a, b), a >>> b, a + " >>> " + b);
	};

});
