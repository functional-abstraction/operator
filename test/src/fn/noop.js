import test from 'ava';
import * as operator from '../../../src/index.js';

test( "noop", t => {
	t.deepEqual(operator.noop(), undefined, "noop() === undefined");
});
