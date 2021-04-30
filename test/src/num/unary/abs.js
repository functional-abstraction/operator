import test from 'ava';
import * as operator from '../../../../src/index.js';

test( "abs", t => {

	var a, i, n;

	n = 10;

	for (i = 0; i < n; ++i) {
		a = Math.floor(Math.random() * Math.pow(2, 32)) - Math.pow(2, 31);
		t.deepEqual(operator.abs(a), Math.abs(a), "Math.abs(" + a + ")");
	};

});
