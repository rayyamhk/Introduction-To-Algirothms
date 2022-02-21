const insertionSort = require('./chapters/chapter2/1_Insertion-sort');
const selectionSort = require('./chapters/chapter2/2_Selection-sort');
const mergeSort = require('./chapters/chapter2/3_Merge-sort');
const binarySearch = require('./chapters/chapter2/4_Binary-search');
const bubbleSort = require('./chapters/chapter2/5_Bubble-sort');

const items = getRandomArray(20000, 0, 1000000000);
const items1 = [...items];
const items2 = [...items];
const items3 = [...items];
const items4 = [...items];

console.time('insertion sort');
insertionSort(items1);
console.timeEnd('insertion sort');

console.time('selection sort');
selectionSort(items2);
console.timeEnd('selection sort');

console.time('merge sort');
mergeSort(items3);
console.timeEnd('merge sort');

console.time('bubble sort');
bubbleSort(items4);
console.timeEnd('bubble sort');
console.log(isSorted(items4))

function getRandomArray(size, min, max) {
  const arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * (max - min) + min);
  }
  return arr;
}