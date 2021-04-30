import test from 'ava';
import * as operator from '../../../../src/index.js';

const macro = (t, a) => {
	t.deepEqual(operator.abs(a), Math.abs(a));
};

macro.title = (title, a) => title ?? `Math.abs(${a})`;

const n = 10;

for (let i = 0; i < n; ++i) {
	const a = Math.floor(Math.random() * 2 ** 32) - 2 ** 31;
	test(macro, a);
}
