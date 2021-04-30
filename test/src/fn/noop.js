import test from 'ava';
import * as operator from '../../../src/index.js';

test('noop', (t) => {
	t.is(operator.noop(), undefined, 'noop() === undefined');
});
