
test("indexOf", function () {

	deepEqual(operator.indexOf([1, 2, 3, 4, 5], 1), 0, "indexOf [1, 2, 3, 4, 5], 1");
	deepEqual(operator.indexOf([1, 2, 3, 4, 5], 2), 1, "indexOf [1, 2, 3, 4, 5], 2");
	deepEqual(operator.indexOf([1, 2, 3, 4, 5], 3), 2, "indexOf [1, 2, 3, 4, 5], 3");
	deepEqual(operator.indexOf([1, 2, 3, 4, 5], 4), 3, "indexOf [1, 2, 3, 4, 5], 4");
	deepEqual(operator.indexOf([1, 2, 3, 4, 5], 5), 4, "indexOf [1, 2, 3, 4, 5], 5");

	deepEqual(operator.indexOf([1, 2, 3, 4, 5], 0), -1, "!indexOf [1, 2, 3, 4, 5], 0");

});
