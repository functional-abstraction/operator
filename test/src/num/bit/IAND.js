import test from 'ava';
import * as operator from '../../../../src';

test( "IAND", t => {

	var a, b, i, n;

	n = 10;

	for (i = 0; i < n; ++i) {
		a = Math.floor(Math.random() * Math.pow(2, 32));
		b = Math.floor(Math.random() * Math.pow(2, 32));
		t.deepEqual(operator.IAND(a, b), a = a &= b, a + " &= " + b);
	};

});
