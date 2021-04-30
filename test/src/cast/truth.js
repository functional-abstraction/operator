
test("truth", function () {

	deepEqual(operator.truth(NaN), false, "truth NaN");
	deepEqual(operator.truth(0), false, "truth 0");
	deepEqual(operator.truth(null), false, "truth null");
	deepEqual(operator.truth(undefined), false, "truth undefined");

	deepEqual(operator.truth(-Math.PI), true, "truth -Math.PI");
	deepEqual(operator.truth(-1), true, "truth -1");
	deepEqual(operator.truth(1), true, "truth 1");
	deepEqual(operator.truth(Math.PI), true, "truth Math.PI");
	deepEqual(operator.truth([]), true, "truth []");
	deepEqual(operator.truth({}), true, "truth {}");
	deepEqual(operator.truth(Infinity), true, "truth Infinity");
	deepEqual(operator.truth(-Infinity), true, "truth -Infinity");

});
