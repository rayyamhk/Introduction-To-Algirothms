// Chapter 5 Problem 2: Searching an unsorted array
const {randomizeInPlace} = require('./2_Random-permute');

function randomSearch(A, target) {
  const len = A.length;
  const track = {};
  let searched = 0;
  while (searched !== len) {
    const index = Math.floor(Math.random() * len);
    if (track[index]) {
      continue;
    }
    if (A[index] === target) {
      return index;
    }
    track[index] = true;
    searched += 1;
  }
  return -1;
}

function linearSearch(A, target) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] === target) {
      return i;
    }
  }
  return -1;
}

function scrambleSearch(A, target) {
  randomizeInPlace(A);
  return linearSearch(A, target);
}

const A = [1,2,3,4,5,6,7];
const target = 8;
console.log(randomSearch(A, target));