/**
 * @param {[[*]]} array 2 dimensional array with any values.
 * @returns {[[*]]} Transposed array
 * @see https://jsperf.com/transpose-2d-array
 */
export function transpose2D(array) {
  return array[0].map((col, i) => array.map((row) => row[i]));
}
