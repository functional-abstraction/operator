
var one = function (obj, txt) {
	deepEqual( operator.identity(obj), obj, "identity " + txt );
};

test("identity", function () {

	one(0, "0");
	one(null, "null");
	one(undefined, "undefined");

	one(-Math.PI, "-Math.PI");
	one(-1, "-1");
	one(1, "1");
	one(Math.PI, "Math.PI");
	one([], "[]");
	one({}, "{}");
	one(Infinity, "Infinity");
	one(-Infinity, "-Infinity");

});
