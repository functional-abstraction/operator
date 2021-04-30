
test("or", function () {

	deepEqual(operator.or(true, true), true, "true or true");
	deepEqual(operator.or(true, false), true, "true or false");
	deepEqual(operator.or(false, true), true, "false or true");
	deepEqual(operator.or(false, false), false, "false or false");

});
