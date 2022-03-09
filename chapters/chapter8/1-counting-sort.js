// Chapter 8.2 Counting sort

module.exports = countingSort;

/**
 * Assumption: Input elements are integer bounded by [0, k].
 * Best == Worst == O(N + k), O(N) if k = O(N).
 * Counting sort is not comparision-based so it is not bounded below by O(NlogN).
 * Counting sort is stable, i.e. the relative order of input elements is remain unchanged.
 * Counting sort is not in-place, space complexity is O(N).
 * The array C stores the commulative frequency of each integer.
 */
function countingSort(A, k) {
  const B = Array(A.length);
  const C = Array(k + 1).fill(0);
  for (let i = 0; i < A.length; i++) {
    C[A[i]] += 1;
  }
  for (let i = 1; i <= k; i++) {
    C[i] = C[i] + C[i - 1]; 
  }
  for (let i = A.length - 1; i >= 0; i--) {
    B[C[A[i]] - 1] = A[i];
    C[A[i]] -= 1;
  }
  return B;
}