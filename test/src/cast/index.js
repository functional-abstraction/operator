import test from 'ava';

import * as operator from '#module';

test('index', (t) => {
	t.is(operator.index(true), 1, 'index true');
	t.is(operator.index(false), 0, 'index false');

	t.deepEqual(operator.index(-2), -2, 'index -2');
	t.deepEqual(operator.index(-1), -1, 'index -1');
	t.is(operator.index(0), 0, 'index 0');
	t.is(operator.index(1), 1, 'index 1');
	t.is(operator.index(2), 2, 'index 2');

	t.is(operator.index(33.33), 33, 'index 33.33');
	t.deepEqual(operator.index(-33.33), -33, 'index -33.33');
});
