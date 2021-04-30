import test from 'ava';
import * as operator from '../../../src';

test( "and", t => {

	t.deepEqual(operator.and(true, true), true, "true and true");
	t.deepEqual(operator.and(true, false), false, "true and false");
	t.deepEqual(operator.and(false, true), false, "false and true");
	t.deepEqual(operator.and(false, false), false, "false and false");

});
