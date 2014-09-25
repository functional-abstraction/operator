
test("index", function () {

	deepEqual(operator.index(true), 1, "index true");
	deepEqual(operator.index(false), 0, "index false");

	deepEqual(operator.index(-2), -2, "index -2");
	deepEqual(operator.index(-1), -1, "index -1");
	deepEqual(operator.index(0), 0, "index 0");
	deepEqual(operator.index(1), 1, "index 1");
	deepEqual(operator.index(2), 2, "index 2");

	deepEqual(operator.index(33.33), 33, "index 33.33");
	deepEqual(operator.index(-33.33), -33, "index -33.33");

});
