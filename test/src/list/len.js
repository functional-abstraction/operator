import test from 'ava';
import * as operator from '#module';

test('len', (t) => {
	t.is(operator.len([]), 0, 'len []');
	t.is(operator.len([1]), 1, 'len [1]');
	t.is(operator.len([1, 2]), 2, 'len [1, 2]');
	t.is(operator.len([1, 2, 3]), 3, 'len [1, 2, 3]');
	t.is(operator.len([1, 2, 3, 4]), 4, 'len [1, 2, 3, 4]');
	t.is(operator.len([1, 2, 3, 4, 5]), 5, 'len [1, 2, 3, 4, 5]');
});
