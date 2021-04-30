
test("isnot", function () {

	var a, b, i, n;

	n = 10;

	for (i = 0; i < n; ++i) {
		a = Math.floor(Math.random() * Math.pow(2, 32));
		b = Math.floor(Math.random() * Math.pow(2, 32));
		deepEqual(operator.isnot(a, b), a !== b, a + " !== " + b);
	};

	a = true;
	b = true;
	deepEqual(operator.isnot(a, b), a !== b, a + " !== " + b);
	a = true;
	b = 1;
	deepEqual(operator.isnot(a, b), a !== b, a + " !== " + b);
	a = 1;
	b = true;
	deepEqual(operator.isnot(a, b), a !== b, a + " !== " + b);
	a = false;
	b = false;
	deepEqual(operator.isnot(a, b), a !== b, a + " !== " + b);
	a = false;
	b = 0;
	deepEqual(operator.isnot(a, b), a !== b, a + " !== " + b);
	a = 0;
	b = false;
	deepEqual(operator.isnot(a, b), a !== b, a + " !== " + b);

});
