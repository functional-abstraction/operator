
test("concat", function () {
	deepEqual(operator.concat([1, 2], [3, 4, 5]), [1, 2, 3, 4, 5], "concat [1, 2], [3, 4, 5]");
});
