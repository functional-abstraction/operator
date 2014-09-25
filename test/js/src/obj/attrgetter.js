
test("attrgetter", function () {

	var getter, obj;

	obj = {
		name : "john",
		size : { cm : 170 },
		"size.cm" : 180
	};

	getter = operator.attrgetter();

	deepEqual(getter(obj), undefined, "attrgetter");

	getter = operator.attrgetter("name");

	deepEqual(getter(obj), "john", "attrgetter name");

	getter = operator.attrgetter("size.cm");

	deepEqual(getter(obj), 170, "attrgetter size.cm");

	getter = operator.attrgetter("name", "size.cm");

	deepEqual(getter(obj), ["john", 170], "attrgetter name size.cm");

});
