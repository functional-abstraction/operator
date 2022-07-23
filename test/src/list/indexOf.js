import test from 'ava';
import * as operator from '#module';

test('indexOf', (t) => {
	t.is(operator.indexOf([1, 2, 3, 4, 5], 1), 0, 'indexOf [1, 2, 3, 4, 5], 1');
	t.is(operator.indexOf([1, 2, 3, 4, 5], 2), 1, 'indexOf [1, 2, 3, 4, 5], 2');
	t.is(operator.indexOf([1, 2, 3, 4, 5], 3), 2, 'indexOf [1, 2, 3, 4, 5], 3');
	t.is(operator.indexOf([1, 2, 3, 4, 5], 4), 3, 'indexOf [1, 2, 3, 4, 5], 4');
	t.is(operator.indexOf([1, 2, 3, 4, 5], 5), 4, 'indexOf [1, 2, 3, 4, 5], 5');

	t.deepEqual(
		operator.indexOf([1, 2, 3, 4, 5], 0),
		-1,
		'!indexOf [1, 2, 3, 4, 5], 0',
	);
});
