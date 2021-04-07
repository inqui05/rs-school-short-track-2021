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
  const arr = [];
  matrix.forEach(() => arr.push([]));

  matrix.forEach((elemY, indexY) => elemY.forEach((elemX, indexX) => {
    let count = 0;
    const startY = indexY === 0 ? 0 : (indexY - 1);
    const endY = indexY === (matrix.length - 1) ? indexY : (indexY + 1);
    const startX = indexX === 0 ? 0 : (indexX - 1);
    const endX = indexX === (elemY.length - 1) ? indexX : (indexX + 1);

    for (let i = startY; i <= endY; i++) {
      for (let j = startX; j <= endX; j++) {
        if (!(i === indexY && j === indexX) && matrix[i][j] === true) {
          count++;
        }
      }
    }
    arr[indexY].push(count);
  }));

  return arr;
}

module.exports = minesweeper;
