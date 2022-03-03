// Chapter 5.3 Randomized algorithms

/**
 * Instead of assuming the distribution of the input,
 * we can shuffle the input to get the same average running time.
 */

module.exports = { permuteBySorting, randomizeInPlace, randomSample}

// O(NlogN)
function permuteBySorting(A) {
  const len = A.length;
  const max = len ** 3;
  const P = new Array(len);
  for (let i = 0; i < len; i++) {
    P[i] = Math.floor(Math.random() * max)
  }
  return P
    .map((priority, i) => ({ item: A[i], priority }))
    .sort((a, b) => a.priority - b.priority)
    .map(({ item }) => item);
}

/**
 * O(N)
 * Pick a random index j in the range [i, len),
 * then swap A[i] and A[j].
 */
function randomizeInPlace(A) {
  const len = A.length;
  for (let i = 0; i < len; i++) {
    const idx = Math.floor(Math.random() * (len - i) + i);
    const temp = A[i];
    A[i] = A[idx];
    A[idx] = temp;
  }
}

/**
 * Sample n items from A randomly
 */
function randomSample(A, n) {
  const randomIndex = _randomSample(n, A.length);
  return randomIndex.map((i) => A[i]);
}

function _randomSample(n, size) {
  if (n === 0) {
    return [];
  }
  const S = _randomSample(n - 1, size - 1);
  const i = Math.floor(Math.random() * size);
  if (S.includes(i)) {
    S.push(size - 1);
  } else {
    S.push(i);
  }
  return S;
}