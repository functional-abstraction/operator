
test("iushift", function () {

	var a, b, i, n;

	n = 10;

	for (i = 0; i < n; ++i) {
		a = Math.floor(Math.random() * Math.pow(2, 32)) - Math.pow(2, 31);
		b = Math.floor(Math.random() * 32);
		deepEqual(operator.iushift(a, b), a = a >>>= b, "a = " + a + " >>>= " + b);
	};

});
