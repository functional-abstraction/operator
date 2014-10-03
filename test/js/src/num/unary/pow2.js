
test("pow2", function () {

	var a, i, n;

	n = 10;

	for (i = 0; i < n; ++i) {
		a = Math.floor(Math.random() * Math.pow(2, 16)) - Math.pow(2, 15);
		deepEqual(operator.pow2(a), a * a, a + "^2");
	};

});
