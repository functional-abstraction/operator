import test from 'ava';
import * as operator from '../../../../src/index.js';

const macro = (t, a) => {
	t.deepEqual(operator.pow3(a), a ** 3);
};

macro.title = (title, a) => title ?? `${a} ** 3`;

const n = 10;

for (let i = 0; i < n; ++i) {
	const a = Math.floor(Math.random() * 2 ** 10) - 2 ** 9;
	test(macro, a);
}
