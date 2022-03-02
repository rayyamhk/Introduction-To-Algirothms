const insertionSort = require('./chapters/chapter2/1_Insertion-sort');
const selectionSort = require('./chapters/chapter2/2_Selection-sort');
const mergeSort = require('./chapters/chapter2/3_Merge-sort');
const binarySearch = require('./chapters/chapter2/4_Binary-search');
const bubbleSort = require('./chapters/chapter2/5_Bubble-sort');
const {heapSort} = require('./chapters/chapter6/1_Heap-sort');
const PriorityQueue = require('./chapters/chapter6/2_Priority-queue');
const {maximumSubarray, maximumSubarrayIterative, maximumSubarrayIterativeLinear} = require('./chapters/chapter4/1_Maximum-subarray');
const {matrixMultiplication, StrassenAlgorithm} = require('./chapters/chapter4/2_Matrix-multiplication');

// const items1 = getRandomArray(10000, -100, 100);
// const items2 = [...items1];
// const items3 = [...items1];

// const A = [[1, 2, 3, 4], [3, 4, 5, 6], [5, 6, 7, 8], [7, 8, 9, 10]];
// const B = [[5, 6, 7, 8], [7, 8, 9, 10], [9, 10, 11, 12], [11, 12, 13, 14]];
// console.log(matrixMultiplication(A, B));
// console.log(StrassenAlgorithm(A, B));

// console.time('heap-sort');
// heapSort(items1);
// console.timeEnd('heap-sort');

// console.time('merge-sort');
// mergeSort(items2);
// console.timeEnd('merge-sort');

const priorityQueue = new PriorityQueue();
priorityQueue.insert(10);
priorityQueue.insert(20);
priorityQueue.insert(30);
console.log(priorityQueue.popMax());
console.log(priorityQueue.heap);
console.log(priorityQueue.popMax());
console.log(priorityQueue.heap);
console.log(priorityQueue.popMax());
console.log(priorityQueue.heap);
priorityQueue.insert(100);
console.log(priorityQueue.heap);
// console.log(priorityQueue.max())
// console.log(priorityQueue.popMax());
// console.log(priorityQueue.heap, priorityQueue.heap.size);

function getRandomArray(size, min, max) {
  const arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * (max - min) + min);
  }
  return arr;
}
