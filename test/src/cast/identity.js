import test from 'ava';

import {identity} from '#module';

const repr = (x) => {
	if (x === undefined) return 'undefined';
	if (typeof x === 'number') return x.toString();
	return JSON.stringify(x);
};

const macro = (t, x) => {
	t.is(identity(x), x);
};

macro.title = (title, x) => title ?? repr(x);

test(macro, 0);
test(macro, null);
test(macro, undefined);

test(macro, -Math.PI);
test(macro, -1);
test(macro, 1);
test(macro, Math.PI);
test(macro, []);
test(macro, {});
test(macro, Number.POSITIVE_INFINITY);
test(macro, Number.NEGATIVE_INFINITY);
