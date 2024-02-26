import test from 'ava';

import * as operator from '#module';

test('attrresolve', (t) => {
	const obj = {
		name: 'jane',
		size: {cm: 170},
		'size.cm': 180,
	};

	t.is(operator.attrresolve(obj, 'name'), 'jane', 'attrresolve name');

	t.is(operator.attrresolve(obj, 'size.cm'), 170, 'attrresolve size.cm');
});
