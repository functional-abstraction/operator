import test from 'ava';

import {entropy} from '../../../fixtures.js';

import * as operator from '#module';

const seed = [0, 17];
const {randint} = entropy(seed);

const macro = (t, a, b) => {
	// eslint-disable-next-line new-cap
	t.deepEqual(operator.IAND(a, b), (a &= b));
};

macro.title = (title, a, b) => title ?? `${a} &= ${b}`;

const n = 10;

for (let i = 0; i < n; ++i) {
	const a = randint(0, 2 ** 32);
	const b = randint(0, 2 ** 32);
	test(macro, a, b);
}
