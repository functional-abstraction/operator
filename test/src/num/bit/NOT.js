import test from 'ava';
import * as operator from '../../../../src/index.js';

import {entropy} from '../../../fixtures.js';

const seed = [0, 17];
const {randint} = entropy(seed);

const macro = (t, a) => {
	// eslint-disable-next-line new-cap
	t.deepEqual(operator.NOT(a), ~a);
};

macro.title = (title, a) => title ?? `~${a}`;

const n = 10;

for (let i = 0; i < n; ++i) {
	const a = randint(0, 2 ** 32);
	test(macro, a);
}
