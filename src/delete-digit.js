const { NotImplementedError } = require('../extensions/index.js');

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

  let maxNumber = '';
  const number = n.toString();
  for (const sym of number) {
    const newNumber = number.replace(sym, '');
    if (newNumber > maxNumber) maxNumber = newNumber;
  }
  return +maxNumber;
}

module.exports = {
  deleteDigit
};
