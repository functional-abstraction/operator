
test("and", function () {

	deepEqual(operator.and(true, true), true, "true and true");
	deepEqual(operator.and(true, false), false, "true and false");
	deepEqual(operator.and(false, true), false, "false and true");
	deepEqual(operator.and(false, false), false, "false and false");

});
