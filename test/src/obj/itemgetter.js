import test from 'ava';
import * as operator from '../../../src';

test( "itemgetter", t => {

	var getter, obj;

	obj = {
		name : "john",
		size : { cm : 170 },
		"size.cm" : 180
	};

	getter = operator.itemgetter();

	t.deepEqual(getter(obj), undefined, "itemgetter");

	getter = operator.itemgetter("name");

	t.deepEqual(getter(obj), "john", "itemgetter name");

	getter = operator.itemgetter("size.cm");

	t.deepEqual(getter(obj), 180, "itemgetter size.cm");

	getter = operator.itemgetter("name", "size.cm");

	t.deepEqual(getter(obj), ["john", 180], "itemgetter name size.cm");

});
