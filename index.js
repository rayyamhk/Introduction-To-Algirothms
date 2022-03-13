const insertionSort = require('./chapters/chapter2/1-insertion-sort');
const selectionSort = require('./chapters/chapter2/2-selection-sort');
const mergeSort = require('./chapters/chapter2/3-merge-sort');
const bubbleSort = require('./chapters/chapter2/5-bubble-sort');
const {heapSort} = require('./chapters/chapter6/1-heap-sort');
const {quicksort} = require('./chapters/chapter7/1-quick-sort');
const countingSort = require('./chapters/chapter8/1-counting-sort');
const bucketSort = require('./chapters/chapter8/3-bucket-sort');
const {LinkedList, LinkedListWithSentinel, Node} = require('./chapters/chapter10/3-linked-list');

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

const list = new LinkedListWithSentinel();
list.insert(node1);
list.insert(node2);
list.insert(node3);
list.insert(node4);
list.insert(node5);
list.display();
list.delete(node3);
list.display();
list.delete(node5);
list.display();
list.delete(node2)
list.display();
// list.delete(node4)
// list.display();
// list.delete(node1)
// list.display();
list.insert(new Node(6))
list.display()

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
