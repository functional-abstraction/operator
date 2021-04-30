import test from 'ava';
import * as operator from '../../../src';

test( "noop", t => {
	t.deepEqual(operator.noop(), undefined, "noop() === undefined");
});
