// Chapter 9.2 Selection in expected linear time: k-th order statistic

const {_randomizedPartition} = require('../chapter7/2-randomized-quicksort');
const {randomizeInPlace} = require('../chapter5/2-shuffle');

module.exports = randomizedSelect;

/**
 * Find the i-th order statistic, i.e. i-th smallest element, in the array,
 * i == 0 refers to the minimum, and i == n-1 refers to the maximum.
 * 
 * The algorithm is inspired by quicksort:
 * If the pivot element is our target, returns it. Otherwise, determines whether
 * our target lies in the left or the right subarray, and solve it recursively.
 * 
 * Average: O(N), Worst: O(N^2).
 */
function randomizedSelect(A, i) {
  return _randomizedSelect(A, 0, A.length - 1, i);
}

function _randomizedSelect(A, start, end, i) {
  if (start >= end) {
    return A[start];
  }
  // pivot is a index w.r.t. the whole array.
  const pivot = _randomizedPartition(A, start, end);
  // k is the pivot index w.r.t. to the subarray [start, ..., end].
  const k = pivot - start;
  // the i-th order statistic refers to the (i-1)-th element in the sorted array.
  if (k === i - 1) {
    return A[pivot];
  }
  if (k > i - 1) {
    // the i-th order statistic of A is the i-th order statistic of the left subarray.
    return _randomizedSelect(A, start, pivot - 1, i);
  }
  // the i-th order statistic of A is the (i - k - 1)-th statistic of the right subarray.
  return _randomizedSelect(A, pivot + 1, end, i - k - 1);
}

// Examples
const arr = [...Array(10000).keys()];
randomizeInPlace(arr);
console.log(randomizedSelect(arr, 123))