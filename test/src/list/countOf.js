import test from 'ava';

import * as operator from '#module';

test('countOf', (t) => {
	t.is(
		operator.countOf([0, 1, 1, 2, 2, 2], 0),
		1,
		'countOf [0, 1, 1, 2, 2, 2], 0',
	);
	t.is(
		operator.countOf([0, 1, 1, 2, 2, 2], 1),
		2,
		'countOf [0, 1, 1, 2, 2, 2], 1',
	);
	t.is(
		operator.countOf([0, 1, 1, 2, 2, 2], 2),
		3,
		'countOf [0, 1, 1, 2, 2, 2], 2',
	);
	t.is(
		operator.countOf([0, 1, 1, 2, 2, 2], 3),
		0,
		'countOf [0, 1, 1, 2, 2, 2], 3',
	);
});
