
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arr = [ ];
  if (!matrix || matrix.length === 0) return [];
  matrix.forEach((e, i) => {
    if (i % 2) e.reverse();
    arr = arr.concat(e);
  })
  return arr;
}
