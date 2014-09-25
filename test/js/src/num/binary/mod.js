
test("mod", function () {

	var a, b, i, n;

	n = 10;

	for (i = 0; i < n; ++i) {
		a = Math.random();
		b = Math.random();
		deepEqual(operator.mod(a, b), a % b, a + " % " + b);
	};

});
