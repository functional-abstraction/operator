
test("countOf", function () {

	deepEqual(operator.countOf([0, 1, 1, 2, 2, 2], 0), 1, "countOf [0, 1, 1, 2, 2, 2], 0");
	deepEqual(operator.countOf([0, 1, 1, 2, 2, 2], 1), 2, "countOf [0, 1, 1, 2, 2, 2], 1");
	deepEqual(operator.countOf([0, 1, 1, 2, 2, 2], 2), 3, "countOf [0, 1, 1, 2, 2, 2], 2");
	deepEqual(operator.countOf([0, 1, 1, 2, 2, 2], 3), 0, "countOf [0, 1, 1, 2, 2, 2], 3");

});
