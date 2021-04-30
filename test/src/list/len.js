import test from 'ava';
import * as operator from '../../../src';

test( "len", t => {

	t.deepEqual(operator.len([]), 0, "len []");
	t.deepEqual(operator.len([1]), 1, "len [1]");
	t.deepEqual(operator.len([1, 2]), 2, "len [1, 2]");
	t.deepEqual(operator.len([1, 2, 3]), 3, "len [1, 2, 3]");
	t.deepEqual(operator.len([1, 2, 3, 4]), 4, "len [1, 2, 3, 4]");
	t.deepEqual(operator.len([1, 2, 3, 4, 5]), 5, "len [1, 2, 3, 4, 5]");

});