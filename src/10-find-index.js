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
  const newArr = [...array];
  let divisor = newArr.length;
  if (newArr.length >= 100) {
    divisor = 2;
  }
  const step = parseInt(newArr.length / divisor, 10);
  let countStep = 0;
  let index;

  if (value > newArr[step]) {
    countStep++;
    newArr.splice(0, step);
  } else {
    newArr.splice(step, newArr.length - step);
  }

  if (newArr.length > 100) {
    index = countStep * step + findIndex(newArr, value);
  } else {
    let topIndex;
    newArr.forEach((elem, ind) => {
      if (elem === value) {
        topIndex = ind;
      }
    });
    index = countStep * step + topIndex;
  }
  return index;
}

module.exports = findIndex;
