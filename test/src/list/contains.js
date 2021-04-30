import test from 'ava';
import * as operator from '../../../src/index.js';

test('contains', (t) => {
	t.true(operator.contains([1, 2, 3, 4, 5], 1), 'contains [1, 2, 3, 4, 5], 1');
	t.true(operator.contains([1, 2, 3, 4, 5], 2), 'contains [1, 2, 3, 4, 5], 2');
	t.true(operator.contains([1, 2, 3, 4, 5], 3), 'contains [1, 2, 3, 4, 5], 3');
	t.true(operator.contains([1, 2, 3, 4, 5], 4), 'contains [1, 2, 3, 4, 5], 4');
	t.true(operator.contains([1, 2, 3, 4, 5], 5), 'contains [1, 2, 3, 4, 5], 5');

	t.true(
		!operator.contains([1, 2, 3, 4, 5], 0),
		'!contains [1, 2, 3, 4, 5], 0',
	);
});
