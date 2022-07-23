import test from 'ava';
import * as operator from '#module';

test('itemgetter', (t) => {
	const obj = {
		name: 'john',
		size: {cm: 170},
		'size.cm': 180,
	};

	let getter = operator.itemgetter();

	t.is(getter(obj), undefined, 'itemgetter');

	getter = operator.itemgetter('name');

	t.is(getter(obj), 'john', 'itemgetter name');

	getter = operator.itemgetter('size.cm');

	t.is(getter(obj), 180, 'itemgetter size.cm');

	getter = operator.itemgetter('name', 'size.cm');

	t.deepEqual(getter(obj), ['john', 180], 'itemgetter name size.cm');
});
