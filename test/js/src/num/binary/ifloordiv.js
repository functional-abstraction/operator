
test("ifloordiv", function () {

	var a, b, i, n;

	n = 10;

	for (i = 0; i < n; ++i) {
		a = Math.random();
		b = Math.random();
		deepEqual(operator.ifloordiv(a, b), a = a / b | 0, "a = " + a + " / " + b + " | 0");
	};

});
