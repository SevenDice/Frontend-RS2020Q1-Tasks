module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(arr => {
    arr.forEach(e => {
      if (e === "^^") count++;
    });
  });
  return count;
};
