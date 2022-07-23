import test from 'ava';
import * as operator from '../../../../src/index.js';

import {entropy} from '../../../fixtures.js';

const seed = [0, 17];
const {randint} = entropy(seed);

const macro = (t, a, b) => {
	t.deepEqual(operator.ushift(a, b), a >>> b);
};

macro.title = (title, a, b) => title ?? `${a} >>> ${b}`;

const n = 10;

for (let i = 0; i < n; ++i) {
	const a = randint(-(2 ** 31), 2 ** 31);
	const b = randint(0, 32);
	test(macro, a, b);
}
