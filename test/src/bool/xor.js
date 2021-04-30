
test("xor", function () {

	deepEqual(operator.xor(true, true), false, "true xor true");
	deepEqual(operator.xor(true, false), true, "true xor false");
	deepEqual(operator.xor(false, true), true, "false xor true");
	deepEqual(operator.xor(false, false), false, "false xor false");

});
