import test from 'ava';
import * as operator from '../../../../src/index.js';

const macro = (t, a, b) => {
	t.deepEqual(operator.ifloordiv(a, b), (a = (a / b) | 0));
};

macro.title = (title, a, b) => title ?? `a = (${a} / ${b}) | 0`;

const n = 10;

for (let i = 0; i < n; ++i) {
	const a = Math.random();
	const b = Math.random();
	test(macro, a, b);
}
