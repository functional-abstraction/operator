import test from 'ava';
import * as operator from '../../../../src/index.js';

const macro = (t, a) => {
	t.deepEqual(operator.pow2(a), a ** 2);
};

macro.title = (title, a) => title ?? `${a} ** 2`;

const n = 10;

for (let i = 0; i < n; ++i) {
	const a = Math.floor(Math.random() * 2 ** 16) - 2 ** 15;
	test(macro, a);
}
