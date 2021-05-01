/**
 * Returns the length of the input.
 *
 * @example
 * // returns 7
 * import {list} from '@iterable-iterator/list';
 * import {range} from '@iterable-iterator/range';
 * len( list( range( 7 ) ) ) ;
 *
 * @param {any} x Input.
 * @return {Number}
 */
export const len = (x) => x.length;
