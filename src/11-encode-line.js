/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const finalStr = [];
  let count = 0;
  let current = arr[0];

  arr.forEach((elem, index) => {
    if (current === elem) {
      count++;
      if (index === arr.length - 1) {
        finalStr.push(count);
        finalStr.push(current);
      }
    } else {
      finalStr.push(count);
      finalStr.push(current);
      current = elem;
      count = 1;
      if (index === arr.length - 1) {
        finalStr.push(count);
        finalStr.push(current);
      }
    }
  });

  finalStr.forEach((elem, index) => {
    if (elem === 1) {
      finalStr.splice(index, 1);
    }
  });

  return finalStr.join('');
}

module.exports = encodeLine;
