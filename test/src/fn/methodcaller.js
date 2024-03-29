import test from 'ava';

import * as operator from '#module';

test('methodcaller', (t) => {
	let caller;

	caller = operator.methodcaller('push', 2, 3, 4, 5);

	t.is(caller([1]), 5, 'push [1], 2, 3, 4, 5');

	caller = operator.methodcaller('concat', [2, 3, 4, 5]);

	t.deepEqual(caller([1]), [1, 2, 3, 4, 5], 'concat [1], [2, 3, 4, 5]');
});
