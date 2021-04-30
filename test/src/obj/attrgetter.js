import test from 'ava';
import * as operator from '../../../src';

test( "attrgetter", t => {

	var getter, obj;

	obj = {
		name : "john",
		size : { cm : 170 },
		"size.cm" : 180
	};

	getter = operator.attrgetter();

	t.deepEqual(getter(obj), undefined, "attrgetter");

	getter = operator.attrgetter("name");

	t.deepEqual(getter(obj), "john", "attrgetter name");

	getter = operator.attrgetter("size.cm");

	t.deepEqual(getter(obj), 170, "attrgetter size.cm");

	getter = operator.attrgetter("name", "size.cm");

	t.deepEqual(getter(obj), ["john", 170], "attrgetter name size.cm");

});
