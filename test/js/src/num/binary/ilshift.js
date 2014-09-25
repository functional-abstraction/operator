
test("ilshift", function () {

	var a, b, i, n;

	n = 10;

	for (i = 0; i < n; ++i) {
		a = Math.floor(Math.random() * Math.pow(2, 32));
		b = Math.floor(Math.random() * 32);
		deepEqual(operator.ilshift(a, b), a = a <<= b, a + " <<= " + b);
	};

});
