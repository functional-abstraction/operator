import test from 'ava';
import * as operator from '../../../../src/index.js';

const macro = (t, a) => {
	// eslint-disable-next-line new-cap
	t.deepEqual(operator.NOT(a), ~a);
};

macro.title = (title, a) => title ?? `~${a}`;

const n = 10;

for (let i = 0; i < n; ++i) {
	const a = Math.floor(Math.random() * 2 ** 32);
	test(macro, a);
}
