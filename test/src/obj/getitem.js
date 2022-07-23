import test from 'ava';
import * as operator from '#module';

test('getitem', (t) => {
	const obj = {
		name: 'john',
		size: {cm: 170},
		'size.cm': 180,
	};

	t.is(operator.getitem(obj, 'name'), 'john', 'getitem name');

	t.is(operator.getitem(obj, 'size.cm'), 180, 'getitem size.cm');
});
