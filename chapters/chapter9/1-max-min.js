// Chapter 9.1 Minimum and maximum

module.exports = {minimum, maximum, minmax};

function minimum(A) {
  let min = A[0];
  for (let i = 1; i < A.length; i++) {
    if (min > A[i]) {
      min = A[i];
    }
  }
  return min;
}

function maximum(A) {
  let max = A[0];
  for (let i = 1; i < A.length; i++) {
    if (max < A[i]) {
      max = A[i];
    }
  }
  return max;
}

function minmax(A) {
  const n = A.length;
  let min, max, start;
  if (n % 2 === 0) {
    if (A[0] < A[1]) {
      min = A[0];
      max = A[1];
    } else {
      min = A[1];
      max = A[0];
    }
    start = 2;
  } else {
    min = A[0];
    max = A[0];
    start = 1;
  }
  for (let i = start; i < A.length; i += 2) {
    if (A[i] < A[i + 1]) {
      if (min > A[i]) {
        min = A[i];
      }
      if (max < A[i + 1]) {
        max = A[i + 1];
      }
    } else {
      if (min > A[i + 1]) {
        min = A[i + 1];
      }
      if (max < A[i]) {
        max = A[i];
      }
    }
  }
  return [min, max];
}