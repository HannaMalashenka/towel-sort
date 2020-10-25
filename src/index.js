
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) return [];

  let array = matrix.toString().split(',').map(Number);

  array = array.sort(function(a, b) {return a - b;});
  return array;
}
