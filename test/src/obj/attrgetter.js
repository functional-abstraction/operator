import test from 'ava';

import * as operator from '#module';

test('attrgetter', (t) => {
	const obj = {
		name: 'john',
		size: {cm: 170},
		'size.cm': 180,
	};

	let getter = operator.attrgetter();

	t.is(getter(obj), undefined, 'attrgetter');

	getter = operator.attrgetter('name');

	t.is(getter(obj), 'john', 'attrgetter name');

	getter = operator.attrgetter('size.cm');

	t.is(getter(obj), 170, 'attrgetter size.cm');

	getter = operator.attrgetter('name', 'size.cm');

	t.deepEqual(getter(obj), ['john', 170], 'attrgetter name size.cm');
});
