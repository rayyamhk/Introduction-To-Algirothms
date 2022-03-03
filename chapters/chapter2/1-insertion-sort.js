// Chapter 2.1

/**
 * It is possible to apply binary search within the while loop to locate the position of insertion.
 * Hence, the number of comparision is reduced to O(NlogN).
 * But the time complexity remains unchanged as it requires O(N^2) swapping.
 */

// Best: O(N)
// Worst: O(N^2)
// Space: O(1)
module.exports = insertionSort;

function insertionSort(items) {
  if (items.length === 1) {
    return;
  }
  for (let j = 1; j < items.length; j++) {
    const value = items[j];
    let i = j - 1;
    while (i >= 0 && items[i] > value) {
      items[i + 1] = items[i];
      i--;
    }
    items[i + 1] = value;
  };
}

// Recursive
function insertionSortRecursive(items) {
  _insertionSortRecursive(items, items.length - 1);
}

function _insertionSortRecursive(items, end) {
  if (end > 0) {
    _insertionSortRecursive(items, end - 1)
    const unsorted = items[end];
    let i = end - 1;
    while (i >= 0 && items[i] > unsorted) {
      items[i + 1] = items[i];
      i--;
    }
    items[i + 1] = unsorted;
  }
}