
test("floordiv", function () {

	var a, b, i, n;

	n = 10;

	for (i = 0; i < n; ++i) {
		a = Math.random();
		b = Math.random();
		deepEqual(operator.floordiv(a, b), a / b | 0, a + " / " + b + " | 0");
	};

});
