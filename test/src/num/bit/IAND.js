import test from 'ava';
import * as operator from '../../../../src/index.js';

const macro = (t, a, b) => {
	// eslint-disable-next-line new-cap
	t.deepEqual(operator.IAND(a, b), (a &= b));
};

macro.title = (title, a, b) => title ?? `${a} &= ${b}`;

const n = 10;

for (let i = 0; i < n; ++i) {
	const a = Math.floor(Math.random() * 2 ** 32);
	const b = Math.floor(Math.random() * 2 ** 32);
	test(macro, a, b);
}
