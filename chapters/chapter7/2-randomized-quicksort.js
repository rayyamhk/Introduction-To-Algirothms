// Chapter 7.3 Randomized version of quicksort

const {_partition, swap} = require('./1-quick-sort');

module.exports = randomizedQuicksort;

function randomizedQuicksort(A) {
  _randomizedQuicksort(A, 0, A.length - 1);
}

function _randomizedQuicksort(A, start, end) {
  if (start >= end) {
    return;
  }
  const pivot = _randomizedPartition(A, start, end);
  _randomizedQuicksort(A, start, pivot - 1);
  _randomizedQuicksort(A, pivot + 1, end);
}

function _randomizedPartition(A, start, end) {
  // Another way to choose the pivot is the "median-of-3".
  const r = Math.floor(Math.random() * (end - start + 1) + start);
  swap(A, r, end);
  return _partition(A, start, end);
}
