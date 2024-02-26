import test from 'ava';

import * as operator from '#module';

test('delitem', (t) => {
	const obj = {
		name: 'john',
		size: {cm: 170},
		'size.cm': 180,
	};

	operator.delitem(obj, 'name');

	t.deepEqual(obj, {size: {cm: 170}, 'size.cm': 180}, 'delitem name');

	operator.delitem(obj, 'size.cm');

	t.deepEqual(obj, {size: {cm: 170}}, 'delitem size.cm');
});
