// Chapter 6.1 to 6.4 Heap

/**
 * The heap data structure is a complete binary tree,
 * each of the node (except the root node) satisfies the heap properties.
 * Max-heap property: the value of a node is at most the value of its parent.
 */

module.exports = {heapSort, maxHeapify};

/**
 * 1. Build a max-heap from the input array. O(N)
 * 2. Swap the first element with the last element of the heap, then decrement the size of the heap. O(1)
 * 3. max-heapify the root of the heap. O(logM), where M is the heap size.
 * 4. Repeat 2 and 3 until the array is sorted. N - 1
 * O(logN) + O(log(N-1)) + ... + O(log(1)) = O(log(N!)) = O(NlogN)
 * Worst == Best == O(NlogN)
 * O(N) if all keys are equal.
 * Space: O(1)
 * 
 * Note: In general, merge sort performs better than heap sort because of the smaller constant factor
 * Also, heap sort is unstable, i.e. the order of the same keys are not guaranteed.
 */
function heapSort(A) {
  buildMaxHeap(A);
  for (let i = A.length - 1; i > 0; i--) {
    swap(A, 0, i);
    A.heapSize -= 1;
    maxHeapify(A, 0);
  }
}

/**
 * Assume the subtree rooted at left(i) and right(i) are max-heaps,
 * but A[i] may not satisfy the max-heap property.
 * It swaps the A[i] downward until the subtree rooted at i satisfies the property.
 * Best: O(1), Worst: O(logN), where N is the size of the subtree.
 */
function maxHeapify(A, i) {
  const l = left(i);
  const r = right(i);
  let largest = i
  if (l < A.heapSize && A[l] > A[i]) {
    largest =  l;
  }
  if (r < A.heapSize && A[r] > A[largest]) {
    largest = r;
  }
  if (largest === i) {
    return;
  }
  swap(A, i, largest);
  return maxHeapify(A, largest);
}

/**
 * Build the max-heap in bottom-up approach.
 * Worst == Best == O(N);
 */
function buildMaxHeap(A) {
  A.heapSize = A.length;
  for (let i = Math.floor(A.length / 2) - 1; i >= 0; i--) {
    maxHeapify(A, i);
  }
}

function parent(i) {
  return Math.floor((i - 1) / 2);
}

function left(i) {
  return 2 * i + 1;
}

function right(i) {
  return 2 * (i + 1);
}

function swap(A, i, j) {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}