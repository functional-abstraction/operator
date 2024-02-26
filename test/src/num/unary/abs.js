import test from 'ava';

import {entropy} from '../../../fixtures.js';

import * as operator from '#module';

const seed = [0, 17];
const {randint} = entropy(seed);

const macro = (t, a) => {
	t.deepEqual(operator.abs(a), Math.abs(a));
};

macro.title = (title, a) => title ?? `Math.abs(${a})`;

const n = 10;

for (let i = 0; i < n; ++i) {
	const a = randint(-(2 ** 31), 2 ** 31);
	test(macro, a);
}
