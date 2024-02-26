import test from 'ava';

import * as operator from '#module';

test('truth', (t) => {
	t.is(operator.truth(Number.NaN), false, 'truth NaN');
	t.is(operator.truth(0), false, 'truth 0');
	t.is(operator.truth(null), false, 'truth null');
	t.is(operator.truth(undefined), false, 'truth undefined');

	t.is(operator.truth(-Math.PI), true, 'truth -Math.PI');
	t.is(operator.truth(-1), true, 'truth -1');
	t.is(operator.truth(1), true, 'truth 1');
	t.is(operator.truth(Math.PI), true, 'truth Math.PI');
	t.is(operator.truth([]), true, 'truth []');
	t.is(operator.truth({}), true, 'truth {}');
	t.is(operator.truth(Number.POSITIVE_INFINITY), true, 'truth Infinity');
	t.is(operator.truth(Number.NEGATIVE_INFINITY), true, 'truth -Infinity');
});
