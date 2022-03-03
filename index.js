const insertionSort = require('./chapters/chapter2/1-insertion-sort');
const selectionSort = require('./chapters/chapter2/2-selection-sort');
const mergeSort = require('./chapters/chapter2/3-merge-sort');
const bubbleSort = require('./chapters/chapter2/5-bubble-sort');
const {heapSort} = require('./chapters/chapter6/1-heap-sort');
const {tailRecursiveQuicksort} = require('./chapters/chapter7/3-exercises');

const items1 = getRandomArray(1000000, -100, 100);
const items2 = [...items1];
const items3 = [...items1];
const items4 = [...items1];
const items5 = [...items1];
const items6 = [...items1];

// console.time('heap-sort');
// heapSort(items1);
// console.timeEnd('heap-sort');

console.time('merge-sort');
mergeSort(items2);
console.timeEnd('merge-sort');

const item = [2, 1, 2, 3, 2, 2, 2];
console.time('quick-sort');
tailRecursiveQuicksort(items3);
console.timeEnd('quick-sort');

// console.time('insertion-sort');
// insertionSort(items6);
// console.timeEnd('insertion-sort');

// console.time('selection-sort');
// selectionSort(items4);
// console.timeEnd('selection-sort');

// console.time('bubble-sort');
// bubbleSort(items5);
// console.timeEnd('bubble-sort');

console.log(isSame(items2, items3));

function isSame(...arrays) {
  const numArrays = arrays.length;
  const arrayLen = arrays[0].length;
  let value = null;
  for (let i = 0; i < arrayLen; i++) {
    for (let j = 0; j < numArrays; j++) {
      const array = arrays[j];
      if (value === null) {
        value = array[i];
      } else if (array[i] !== value) {
        return false;
      }
    }
    value = null;
  }
  return true;
}

function getRandomArray(size, min, max) {
  const arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * (max - min) + min);
  }
  return arr;
}
