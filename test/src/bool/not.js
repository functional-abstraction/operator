import test from 'ava';
import * as operator from '../../../src/index.js';

test('not', (t) => {
	t.is(operator.not(true), false, 'not true');
	t.is(operator.not(false), true, 'not false');
});
