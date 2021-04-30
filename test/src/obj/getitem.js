import test from 'ava';
import * as operator from '../../../src';

test( "getitem", t => {

	var getter, obj;

	obj = {
		name : "john",
		size : { cm : 170 },
		"size.cm" : 180
	};

	t.deepEqual(operator.getitem(obj, "name"), "john", "getitem name");

	t.deepEqual(operator.getitem(obj, "size.cm"), 180, "getitem size.cm");

});
