// Chapter 7.1 Quicksort

/**
 * 1. Insertion sort is better than quick sort if the array is almost sorted: Exercise 7.2-4
 */

module.exports = {quicksort, _partition, swap};

function quicksort(A) {
  _quicksort(A, 0, A.length - 1);
}

/**
 * 1. Partition the array based on a pivot:
 *    all elements on the left are smaller than the pivot,
 *    all elements on the right are larger than the pivot.
 * 2. Apply quicksort recursively on the left subarray and the right subarray.
 * 
 * If the partition is balanced: O(NlogN)
 * If the partition is maximally unbalanced: O(N^2) 
 */
function _quicksort(A, start, end) {
  if (start >= end) {
    return;
  }
  const pivot = _partition(A, start, end);
  _quicksort(A, start, pivot - 1);
  _quicksort(A, pivot + 1, end);
}

/**
 * Re-partition the array by moving all elements smaller than pivot to the left.
 * 1. A[k] is smaller than the pivot for all k <= i.
 * 2. A[k] is larger than the pivot for all i < k < j.
 * Best == Worst == O(N)
 */
function _partition(A, start, end) {
  const pivot = A[end];
  let i = start - 1;
  for (let j = start; j < end; j++) {
    if (A[j] <= pivot) {
      i++;
      swap(A, i, j);
    }
  }
  swap(A, i + 1, end);
  return i + 1;
}

function swap(A, i, j) {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}