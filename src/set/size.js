/**
 * Returns the size of the input.
 *
 * @example
 * // returns 7
 * import {range} from '@iterable-iterator/range';
 * size( new Set( range( 7 ) ) ) ;
 *
 * @param {any} x Input.
 * @return {Number}
 */
const size = (x) => x.size;
export default size;
