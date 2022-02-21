// Chapter 2.3 Exercise 5
// Best: O(1)
// Worst: O(logN)

// assume items is in ascending order
function binarySearch(items, target) {
  let left = 0;
  let right = items.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (items[mid] === target) {
      return mid;
    }
    if (items[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

function binarySearchRecursive(items, target) {
  return _binarySearchRecursive(items, target, 0, items.length - 1);
}

function _binarySearchRecursive(items, target, start, end) {
  if (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (items[mid] === target) {
      return mid;
    }
    if (items[mid] < target) {
      return _binarySearchRecursive(items, target, mid + 1, end);
    }
    return _binarySearchRecursive(items, target, start, mid - 1)
  }
  return -1;
}

module.exports = binarySearch;
