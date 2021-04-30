import test from 'ava';
import * as operator from '../../../src/index.js';

test('and', (t) => {
	t.is(operator.and(true, true), true, 'true and true');
	t.is(operator.and(true, false), false, 'true and false');
	t.is(operator.and(false, true), false, 'false and true');
	t.is(operator.and(false, false), false, 'false and false');
});
