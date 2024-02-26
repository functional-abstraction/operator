import test from 'ava';

import * as operator from '#module';

test('size', (t) => {
	t.is(operator.size(new Set([])), 0, 'size {}');
	t.is(operator.size(new Set([1])), 1, 'size {1}');
	t.is(operator.size(new Set([1, 2])), 2, 'size {1, 2}');
	t.is(operator.size(new Set([1, 2, 3])), 3, 'size {1, 2, 3}');
	t.is(operator.size(new Set([1, 2, 3, 4])), 4, 'size {1, 2, 3, 4}');
	t.is(operator.size(new Set([1, 2, 3, 4, 5])), 5, 'size {1, 2, 3, 4, 5}');
});
