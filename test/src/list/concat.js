import test from 'ava';
import * as operator from '../../../src';

test( "concat", t => {
	t.deepEqual(operator.concat([1, 2], [3, 4, 5]), [1, 2, 3, 4, 5], "concat [1, 2], [3, 4, 5]");
});
