import test from 'ava';
import * as operator from '../../../src/index.js';

test('attrresolve', (t) => {
	const obj = {
		name: 'john',
		size: {cm: 170},
		'size.cm': 180,
	};

	t.is(operator.attrresolve(obj, 'name'), 'john', 'attrresolve name');

	t.is(operator.attrresolve(obj, 'size.cm'), 170, 'attrresolve size.cm');
});
