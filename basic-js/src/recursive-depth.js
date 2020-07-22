module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    for (const item of arr) {
      count = Array.isArray(item)
        ? Math.max(this.calculateDepth(item), count)
        : count;
    }
    return ++count;
  }
};