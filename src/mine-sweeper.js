const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  let res = [];

  for (let row = 0; row < matrix.length; row++) {
    let temp = [];
    for (let column = 0; column < matrix[row].length; column++) {
      let count = 0;
      for (let k = row - 1; k <= row + 1; k++) {
        for (let z = column - 1; z <= column + 1; z++) {
          if (!(k === row && z === column)) {
            if (k >= 0 && z >= 0 && k < matrix.length && z < matrix[row].length && matrix[k][z] === true) count++;
          }
        }
      }
      temp.push(count);
    }
    res.push(temp);
  }
  return res;
}

module.exports = {
  minesweeper
};
