
test("iconcat", function () {
	var a;
	a = [1, 2];
	operator.iconcat(a, [3, 4, 5]);
	deepEqual(a, [1, 2, 3, 4, 5], "iconcat [1, 2], [3, 4, 5]");
});
