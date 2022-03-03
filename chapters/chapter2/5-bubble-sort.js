// Chapter 2 Problem 2: Correctness of bubblesort

/**
 * Almost the worst sorting algorithm, insertion sort is usually considerably more efficient,
 * as it requires more swappings and comparisions.
 * The inner loop guarantees that the ith element is the smallest among [i, ..., N - 1] subarray.
 */

// Best == Worst == O(N^2)
module.exports = bubbleSort;

function bubbleSort(items) {
  for (let i = 0; i < items.length - 1; i++) {
    for (let j = items.length - 1; j > i; j--) {
      if (items[j] < items[j - 1]) {
        const temp = items[j - 1];
        items[j - 1] = items[j];
        items[j] = temp;
      }
    }
  }
}
