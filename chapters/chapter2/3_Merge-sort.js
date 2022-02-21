// Chapter 2.3

/**
 * Insertion sort may outperform merge sort when the array size is small enough
 * because of the small constant factor. It makes sense to apply insertion sort
 * in merge sort when the subproblem becomes sufficiently small.
 */

// Best == Worst == O(NlogN)
// Space: O(N)
module.exports = mergeSort;

function mergeSort(items) {
  _mergeSort(items, 0, items.length - 1);
}

function _mergeSort(items, p, r) {
  if (p < r) {
    const q = Math.floor((p + r) / 2);
    _mergeSort(items, p, q); // sort p to q
    _mergeSort(items, q + 1, r); // sort q+1 to r
    merge(items, p, q, r);
  }
}

function merge(items, p, q, r) {
  const left = items.slice(p, q + 1); // from p to q
  const right = items.slice(q + 1, r + 1); // from q+1 to r
  left.push(Number.POSITIVE_INFINITY);
  right.push(Number.POSITIVE_INFINITY);
  let leftIndex = 0;
  let rightIndex = 0;
  for (let i = p; i <= r; i++) {
    if (left[leftIndex] < right[rightIndex]) {
      items[i] = left[leftIndex];
      leftIndex++;
    } else {
      items[i] = right[rightIndex];
      rightIndex++;
    }
  }
}