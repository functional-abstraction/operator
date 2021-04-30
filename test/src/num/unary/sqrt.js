import test from 'ava';
import * as operator from '../../../../src/index.js';

const macro = (t, a) => {
	t.deepEqual(operator.sqrt(a), Math.sqrt(a));
};

macro.title = (title, a) => title ?? `Math.sqrt(${a})`;

const n = 10;

for (let i = 0; i < n; ++i) {
	const a = Math.floor(Math.random() * 2 ** 32) - 2 ** 31;
	test(macro, a);
}
