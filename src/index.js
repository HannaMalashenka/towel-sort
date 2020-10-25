
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) return [];

  let newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2) matrix[i].reverse();
        newMatrix.push(matrix[i]);
    }
    return newMatrix.flat();
}
