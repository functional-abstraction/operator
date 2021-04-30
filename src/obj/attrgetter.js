import {noop} from '../fn/noop.js';
import {attrresolve} from './attrresolve.js';

export function attrgetter(...args) {
	const len = args.length;

	if (len === 0) return noop;

	if (len === 1) {
		const attr = args[0];
		return (obj) => attrresolve(obj, attr);
	}

	return (obj) => {
		const tuple = [];

		for (let i = 0; i < len; ++i) {
			tuple.push(attrresolve(obj, args[i]));
		}

		return tuple;
	};
}
