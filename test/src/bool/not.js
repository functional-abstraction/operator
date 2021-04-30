import test from 'ava';
import * as operator from '../../../src';

test( "not", t => {

	t.deepEqual(operator.not(true), false, "not true");
	t.deepEqual(operator.not(false), true, "not false");

});
