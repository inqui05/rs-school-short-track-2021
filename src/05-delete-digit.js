/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [];
  for (let i = 0; i < n.toString().split('').length; i++) {
    const newArr = n.toString().split('');
    newArr.splice(i, 1);
    arr.push(newArr.join(''));
  }
  return +arr.sort((a, b) => a - b)[arr.length - 1];
}

module.exports = deleteDigit;
