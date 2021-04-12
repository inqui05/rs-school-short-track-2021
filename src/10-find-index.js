/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let index = 0;
  let left = -1;
  let right = array.length;

  while ((right - left) > 1) {
    const middle = Math.floor((left + right) / 2);
    if (value === array[middle]) {
      index = middle;
      left = right;
    } else if (value > array[middle]) {
      left = middle;
    } else {
      right = middle;
    }
  }

  return index;
}

module.exports = findIndex;
