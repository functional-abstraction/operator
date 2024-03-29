import test from 'ava';

import * as operator from '#module';

test('setitem', (t) => {
	const obj = {
		name: 'john',
		size: {cm: 170},
		'size.cm': 180,
	};

	operator.setitem(obj, 'name', 'jack');

	t.deepEqual(
		obj,
		{
			name: 'jack',
			size: {cm: 170},
			'size.cm': 180,
		},
		'setitem name',
	);

	operator.setitem(obj, 'size.cm', 190);

	t.deepEqual(
		obj,
		{
			name: 'jack',
			size: {cm: 170},
			'size.cm': 190,
		},
		'setitem size.cm',
	);
});
