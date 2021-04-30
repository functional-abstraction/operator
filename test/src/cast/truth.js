import test from 'ava';
import * as operator from '../../../src/index.js';

test( "truth", t => {

	t.deepEqual(operator.truth(NaN), false, "truth NaN");
	t.deepEqual(operator.truth(0), false, "truth 0");
	t.deepEqual(operator.truth(null), false, "truth null");
	t.deepEqual(operator.truth(undefined), false, "truth undefined");

	t.deepEqual(operator.truth(-Math.PI), true, "truth -Math.PI");
	t.deepEqual(operator.truth(-1), true, "truth -1");
	t.deepEqual(operator.truth(1), true, "truth 1");
	t.deepEqual(operator.truth(Math.PI), true, "truth Math.PI");
	t.deepEqual(operator.truth([]), true, "truth []");
	t.deepEqual(operator.truth({}), true, "truth {}");
	t.deepEqual(operator.truth(Infinity), true, "truth Infinity");
	t.deepEqual(operator.truth(-Infinity), true, "truth -Infinity");

});
