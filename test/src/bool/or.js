import test from 'ava';
import * as operator from '../../../src/index.js';

test('or', (t) => {
	t.is(operator.or(true, true), true, 'true or true');
	t.is(operator.or(true, false), true, 'true or false');
	t.is(operator.or(false, true), true, 'false or true');
	t.is(operator.or(false, false), false, 'false or false');
});
