
test("contains", function () {

	ok(operator.contains([1, 2, 3, 4, 5], 1), "contains [1, 2, 3, 4, 5], 1");
	ok(operator.contains([1, 2, 3, 4, 5], 2), "contains [1, 2, 3, 4, 5], 2");
	ok(operator.contains([1, 2, 3, 4, 5], 3), "contains [1, 2, 3, 4, 5], 3");
	ok(operator.contains([1, 2, 3, 4, 5], 4), "contains [1, 2, 3, 4, 5], 4");
	ok(operator.contains([1, 2, 3, 4, 5], 5), "contains [1, 2, 3, 4, 5], 5");

	ok(!operator.contains([1, 2, 3, 4, 5], 0), "!contains [1, 2, 3, 4, 5], 0");

});
