import test from 'ava';
import * as operator from '../../../src/index.js';

test( "xor", t => {

	t.deepEqual(operator.xor(true, true), false, "true xor true");
	t.deepEqual(operator.xor(true, false), true, "true xor false");
	t.deepEqual(operator.xor(false, true), true, "false xor true");
	t.deepEqual(operator.xor(false, false), false, "false xor false");

});
