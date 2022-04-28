const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let rep = String(str);

  if (options.hasOwnProperty('addition')) {
    let additionStr = String(options['addition']);
    if (options.hasOwnProperty('additionRepeatTimes')) {
      const sep = options.hasOwnProperty('additionSeparator')
          ? options['additionSeparator']
          : "|";
      additionStr += sep;
      additionStr = additionStr.repeat(options['additionRepeatTimes']);
      additionStr = additionStr.slice(0, additionStr.lastIndexOf(sep));
    }
    rep += additionStr;
  }

  if (options.hasOwnProperty('repeatTimes')) {
    const currSeparator = options.hasOwnProperty('separator')
        ? options['separator']
        : "+";
    rep += currSeparator;
    rep = rep.repeat(options['repeatTimes']);
    rep = rep.slice(0, rep.lastIndexOf(currSeparator));
  }
  return rep;
}

module.exports = {
  repeater
};
