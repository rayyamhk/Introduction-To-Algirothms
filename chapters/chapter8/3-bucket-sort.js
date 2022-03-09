// Chapter 8.4 Bucket sort

const insertionSort = require('../chapter2/1-insertion-sort');

module.exports = bucketSort;

/**
 * Assumptions:
 *  - Input elements are bounded by [0, 1].
 *  - Input elements are distributed evenly.
 * 
 * Correctness:
 * Given a_{i} <= a_{j}.
 * If they are the same, they are sorted in the same bucket.
 * If they are different, a_{i} is pushed to a former bucket.
 * 
 * Average == O(N), worst == O(N^2).
 */
function bucketSort(A) {
  const n = A.length;
  const B = Array(n).fill().map(() => []);
  for (let i = 0; i < n; i++) {
    B[Math.floor(A[i] * n)].push(A[i]);
  }
  for (let i = 0; i < n; i++) {
    insertionSort(B[i]);
  }
  return [].concat(...B);
};
