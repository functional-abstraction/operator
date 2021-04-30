
test("methodcaller", function () {

	var caller;

	caller = operator.methodcaller("push", 2, 3, 4, 5);

	deepEqual(caller([1]), 5, "push [1], 2, 3, 4, 5");

	caller = operator.methodcaller("concat", [2, 3, 4, 5]);

	deepEqual(caller([1]), [1, 2, 3, 4, 5], "concat [1], [2, 3, 4, 5]");

});
