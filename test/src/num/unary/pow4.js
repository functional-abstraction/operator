import test from 'ava';
import * as operator from '../../../../src/index.js';

const macro = (t, a) => {
	t.deepEqual(operator.pow4(a), a ** 4);
};

macro.title = (title, a) => title ?? `${a} ** 4`;

const n = 10;

for (let i = 0; i < n; ++i) {
	const a = Math.floor(Math.random() * 2 ** 8) - 2 ** 7;
	test(macro, a);
}
