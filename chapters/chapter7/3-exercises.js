const {_partition} = require('./1-quick-sort');

module.exports = {quicksortWithEqual, tailRecursiveQuicksort}

// Problem 7.2 Quicksort with equal element values

function quicksortWithEqual(A) {
  _quicksortWithEqual(A, 0, A.length - 1);
}

function _quicksortWithEqual(A, start, end) {
  if (start >= end) {
    return;
  }
  const [q, t] = _partitionWithEqual(A, start, end);
  _quicksortWithEqual(A, start, q - 1);
  _quicksortWithEqual(A, t + 1, end);
}

function _partitionWithEqual(A, start, end) {
  const pivot = A[end];
  let i = start - 1;
  for (let j = start; j < end; j++) {
    if (A[j] <= pivot) {
      i++;
      swap(A, i, j);
    }
  }
  swap(A, i + 1, end);
  let k = i;
  while (A[k] === pivot) {
    k--;
  }
  return [k + 1, i + 1];
}

// Problem 7.4 Stack depth for quicksort: Tail recursion
/**
 * Tail recursion: Reduce the stack depth
 */
function tailRecursiveQuicksort(A) {
  _tailRecursiveQuicksort(A, 0, A.length - 1);
}

function _tailRecursiveQuicksort(A, start, end) {
  while (start < end) {
    const pivot = _partition(A, start, end);
    const mid = Math.floor((end - start) / 2);
    if (pivot < mid) {
      _tailRecursiveQuicksort(A, start, pivot - 1);
      start = pivot + 1;
    } else {
      _tailRecursiveQuicksort(A, pivot + 1, end);
      end = pivot - 1;
    }
  }
}

function swap(A, i, j) {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}