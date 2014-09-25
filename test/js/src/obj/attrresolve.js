
test("attrresolve", function () {

	var getter, obj;

	obj = {
		name : "john",
		size : { cm : 170 },
		"size.cm" : 180
	};

	deepEqual(operator.attrresolve(obj, "name"), "john", "attrresolve name");

	deepEqual(operator.attrresolve(obj, "size.cm"), 170, "attrresolve size.cm");

});
