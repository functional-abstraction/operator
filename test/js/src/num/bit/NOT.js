
test("NOT", function () {

	var a, i, n;

	n = 10;

	for (i = 0; i < n; ++i) {
		a = Math.floor(Math.random() * Math.pow(2, 32));
		deepEqual(operator.NOT(a), ~a, "~" + a);
	};

});
