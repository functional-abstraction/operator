
test("delitem", function () {

	var getter, obj;

	obj = {
		name : "john",
		size : { cm : 170 },
		"size.cm" : 180
	};

	operator.delitem(obj, "name");

	deepEqual(obj, {size : { cm : 170 }, "size.cm" : 180}, "delitem name");

	operator.delitem(obj, "size.cm")

	deepEqual(obj, {size : { cm : 170 }}, "delitem size.cm");

});
