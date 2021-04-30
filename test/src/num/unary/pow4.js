import test from 'ava';
import * as operator from '../../../../src/index.js';

test( "pow4", t => {

	var a, i, n;

	n = 10;

	for (i = 0; i < n; ++i) {
		a = Math.floor(Math.random() * Math.pow(2, 8)) - Math.pow(2, 7);
		t.deepEqual(operator.pow4(a), a * a * a * a, a + "^4");
	};

});
