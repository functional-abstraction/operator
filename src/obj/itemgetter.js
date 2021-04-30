import {noop} from '../fn/noop.js';

export function itemgetter(...args) {
	const len = args.length;

	if (len === 0) return noop;

	if (len === 1) {
		const attr = args[0];
		return (obj) => obj[attr];
	}

	return (obj) => {
		const tuple = [];

		for (let i = 0; i < len; ++i) {
			tuple.push(obj[args[i]]);
		}

		return tuple;
	};
}
