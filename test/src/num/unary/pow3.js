import test from 'ava';
import * as operator from '../../../../src/index.js';

test( "pow3", t => {

	var a, i, n;

	n = 10;

	for (i = 0; i < n; ++i) {
		a = Math.floor(Math.random() * Math.pow(2, 10)) - Math.pow(2, 9);
		t.deepEqual(operator.pow3(a), a * a * a, a + "^3");
	};

});
