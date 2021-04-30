
test("not", function () {

	deepEqual(operator.not(true), false, "not true");
	deepEqual(operator.not(false), true, "not false");

});
