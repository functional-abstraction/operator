import test from 'ava';
import * as operator from '../../../src';

test( "or", t => {

	t.deepEqual(operator.or(true, true), true, "true or true");
	t.deepEqual(operator.or(true, false), true, "true or false");
	t.deepEqual(operator.or(false, true), true, "false or true");
	t.deepEqual(operator.or(false, false), false, "false or false");

});
