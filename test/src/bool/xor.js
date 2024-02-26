import test from 'ava';

import * as operator from '#module';

const macro = (t, a, b, expected) => {
	t.is(operator.xor(a, b), expected);
};

macro.title = (title, a, b, expected) =>
	title ?? `${a} xor ${b} is ${expected}`;

test(macro, true, true, false);
test(macro, true, false, true);
test(macro, false, true, true);
test(macro, false, false, false);
