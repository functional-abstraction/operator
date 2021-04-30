import test from 'ava';
import * as operator from '../../../src';

test( "countOf", t => {

	t.deepEqual(operator.countOf([0, 1, 1, 2, 2, 2], 0), 1, "countOf [0, 1, 1, 2, 2, 2], 0");
	t.deepEqual(operator.countOf([0, 1, 1, 2, 2, 2], 1), 2, "countOf [0, 1, 1, 2, 2, 2], 1");
	t.deepEqual(operator.countOf([0, 1, 1, 2, 2, 2], 2), 3, "countOf [0, 1, 1, 2, 2, 2], 2");
	t.deepEqual(operator.countOf([0, 1, 1, 2, 2, 2], 3), 0, "countOf [0, 1, 1, 2, 2, 2], 3");

});
