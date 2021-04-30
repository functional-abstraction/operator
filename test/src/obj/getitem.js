
test("getitem", function () {

	var getter, obj;

	obj = {
		name : "john",
		size : { cm : 170 },
		"size.cm" : 180
	};

	deepEqual(operator.getitem(obj, "name"), "john", "getitem name");

	deepEqual(operator.getitem(obj, "size.cm"), 180, "getitem size.cm");

});
