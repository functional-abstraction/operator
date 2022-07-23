import test from 'ava';
import * as operator from '#module';

test('noop', (t) => {
	t.is(operator.noop(), undefined, 'noop() === undefined');
});
