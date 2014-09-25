
test("itemgetter", function () {

	var getter, obj;

	obj = {
		name : "john",
		size : { cm : 170 },
		"size.cm" : 180
	};

	getter = operator.itemgetter();

	deepEqual(getter(obj), undefined, "itemgetter");

	getter = operator.itemgetter("name");

	deepEqual(getter(obj), "john", "itemgetter name");

	getter = operator.itemgetter("size.cm");

	deepEqual(getter(obj), 180, "itemgetter size.cm");

	getter = operator.itemgetter("name", "size.cm");

	deepEqual(getter(obj), ["john", 180], "itemgetter name size.cm");

});
