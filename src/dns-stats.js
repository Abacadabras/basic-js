const { NotImplementedError } = require('../extensions/index.js');

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

  const obj = {};
  for (const domain of domains) {
    const currDomain = domain.split('.');
    let acc = '',
        index = currDomain.length - 1;
    while (index >= 0) {
      acc += '.' + currDomain[index];
      if (!obj[acc]) obj[acc] = 0;
      obj[acc]++;
      index--;
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
