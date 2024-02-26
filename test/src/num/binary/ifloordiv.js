import test from 'ava';

import {entropy} from '../../../fixtures.js';

import * as operator from '#module';

const seed = [0, 17];
const {random} = entropy(seed);

const macro = (t, a, b) => {
	t.deepEqual(operator.ifloordiv(a, b), (a = (a / b) | 0));
};

macro.title = (title, a, b) => title ?? `a = (${a} / ${b}) | 0`;

const n = 10;

for (let i = 0; i < n; ++i) {
	const a = random();
	const b = random();
	test(macro, a, b);
}
