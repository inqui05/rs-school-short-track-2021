/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = [];
  const finalObj = {};
  let count = 0;

  domains.forEach((elem) => {
    const temp = elem.match(/[A-Z0-9]{2,}/gi);
    let dns;
    for (let i = temp.length - 1; i >= 0; i--) {
      dns = dns === undefined ? `.${temp[i]}` : `${dns}.${temp[i]}`;
      arr.push(dns);
    }
  });
  arr.sort();
  let current = arr[0];

  arr.forEach((elem, index) => {
    if (current === elem) {
      count++;
      if (index === arr.length - 1) {
        finalObj[current] = count;
      }
    } else {
      finalObj[current] = count;
      current = elem;
      count = 1;
      if (index === arr.length - 1) {
        finalObj[current] = count;
      }
    }
  });

  return finalObj;
}

module.exports = getDNSStats;
