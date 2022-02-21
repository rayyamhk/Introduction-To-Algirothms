// Chapter 2.2 Exercise 2

/**
 * In general, insertion sort outperforms selection sort,
 * as the time complexity of selection sort is O(N^2) in best case while O(N) for insertion sort.
 * However, insertion sort requires O(N^2) swappings, while selection sort only requires O(N) swappings.
 */

// Best == Worst == O(N^2)
// Space: O(1)
module.exports = selectionSort;

function selectionSort(items) {
  for (let j = 0; j < items.length - 1; j++) {
    let min = items[j];
    let minIndex = j;
    for (let i = j + 1; i < items.length; i++) {
      if (items[i] < min) {
        min = items[i];
        minIndex = i;
      }
    }
    const temp = items[j];
    items[j] = min;
    items[minIndex] = temp;
  }
}
