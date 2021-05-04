import test from 'ava';
import * as operator from '../../../src/index.js';

const macro = (t, a, b) => {
	t.deepEqual(operator.isnot(a, b), a !== b);
};

macro.title = (title, a, b) => title ?? `${a} !== ${b}`;

const n = 10;

for (let i = 0; i < n; ++i) {
	const a = Math.floor(Math.random() * 2 ** 32);
	const b = Math.floor(Math.random() * 2 ** 32);
	test(macro, a, b);
}

test(macro, true, true);
test(macro, true, 1);
test(macro, 1, true);
test(macro, false, false);
test(macro, false, 0);
test(macro, 0, false);