const insertionSort = require('./chapters/chapter2/1-insertion-sort');
const selectionSort = require('./chapters/chapter2/2-selection-sort');
const mergeSort = require('./chapters/chapter2/3-merge-sort');
const bubbleSort = require('./chapters/chapter2/5-bubble-sort');
const {heapSort} = require('./chapters/chapter6/1-heap-sort');
const {quicksort} = require('./chapters/chapter7/1-quick-sort');
const countingSort = require('./chapters/chapter8/1-counting-sort');
const bucketSort = require('./chapters/chapter8/3-bucket-sort');

const item = Array(100000).fill().map(() => Math.random());
const items1 = [...item];
const items2 = [...item];
const items3 = [...item];
const items4 = [...item];

// const items1 = getRandomArray(1000000, 0, 10000);
// const items2 = [...items1];
// const items3 = [...items1];
// const items4 = [...items1];
// const items5 = [...items1];
// const items6 = [...items1];

console.time('heap-sort');
heapSort(items1);
console.timeEnd('heap-sort');

console.time('merge-sort');
mergeSort(items2);
console.timeEnd('merge-sort');

console.time('quick-sort');
quicksort(items3);
console.timeEnd('quick-sort');

console.time('bucket-sort');
const newItems4 = bucketSort(items4);
console.timeEnd('bucket-sort');

// console.time('counting-sort');
// const newItems4 = countingSort(items4, 10000);
// console.timeEnd('counting-sort');

// console.time('insertion-sort');
// insertionSort(items6);
// console.timeEnd('insertion-sort');

// console.time('selection-sort');
// selectionSort(items4);
// console.timeEnd('selection-sort');

// console.time('bubble-sort');
// bubbleSort(items5);
// console.timeEnd('bubble-sort');
console.log(isSame(items1, items2, items3, newItems4));

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
