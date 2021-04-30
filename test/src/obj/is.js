import test from 'ava';
import * as operator from '../../../src/index.js';

test( "is", t => {

	var a, b, i, n;

	n = 10;

	for (i = 0; i < n; ++i) {
		a = Math.floor(Math.random() * Math.pow(2, 32));
		b = Math.floor(Math.random() * Math.pow(2, 32));
		t.deepEqual(operator.is(a, b), a === b, a + " === " + b);
	};

	a = true;
	b = true;
	t.deepEqual(operator.is(a, b), a === b, a + " === " + b);
	a = true;
	b = 1;
	t.deepEqual(operator.is(a, b), a === b, a + " === " + b);
	a = 1;
	b = true;
	t.deepEqual(operator.is(a, b), a === b, a + " === " + b);
	a = false;
	b = false;
	t.deepEqual(operator.is(a, b), a === b, a + " === " + b);
	a = false;
	b = 0;
	t.deepEqual(operator.is(a, b), a === b, a + " === " + b);
	a = 0;
	b = false;
	t.deepEqual(operator.is(a, b), a === b, a + " === " + b);

});
