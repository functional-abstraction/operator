
test("len", function () {

	deepEqual(operator.len([]), 0, "len []");
	deepEqual(operator.len([1]), 1, "len [1]");
	deepEqual(operator.len([1, 2]), 2, "len [1, 2]");
	deepEqual(operator.len([1, 2, 3]), 3, "len [1, 2, 3]");
	deepEqual(operator.len([1, 2, 3, 4]), 4, "len [1, 2, 3, 4]");
	deepEqual(operator.len([1, 2, 3, 4, 5]), 5, "len [1, 2, 3, 4, 5]");

});
