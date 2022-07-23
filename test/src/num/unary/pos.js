import test from 'ava';
import * as operator from '../../../../src/index.js';

import {entropy} from '../../../fixtures.js';

const seed = [0, 17];
const {randint} = entropy(seed);

const macro = (t, a) => {
	t.deepEqual(operator.pos(a), Number(a));
};

macro.title = (title, a) => title ?? `Number(${a})`;

const n = 10;

for (let i = 0; i < n; ++i) {
	const a = randint(-(2 ** 31), 2 ** 31);
	test(macro, a);
}
