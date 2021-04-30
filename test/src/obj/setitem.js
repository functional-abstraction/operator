
test("setitem", function () {

	var getter, obj;

	obj = {
		name : "john",
		size : { cm : 170 },
		"size.cm" : 180
	};

	operator.setitem(obj, "name", "jack");

	deepEqual(obj, {
		name : "jack",
		size : { cm : 170 },
		"size.cm" : 180
	}, "setitem name");

	operator.setitem(obj, "size.cm", 190)

	deepEqual(obj, {
		name : "jack",
		size : { cm : 170 },
		"size.cm" : 190
	}, "setitem size.cm");

});
