import test from 'ava';
import * as operator from '#module';

import {entropy} from '../../../fixtures.js';

const seed = [0, 17];
const {randint} = entropy(seed);

const macro = (t, a) => {
	t.deepEqual(operator.pow3(a), a ** 3);
};

macro.title = (title, a) => title ?? `${a} ** 3`;

const n = 10;

for (let i = 0; i < n; ++i) {
	const a = randint(-(2 ** 9), 2 ** 9);
	test(macro, a);
}
