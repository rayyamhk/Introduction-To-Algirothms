// Chapter 4.1 Maximum Subarray

module.exports =maximumSubarrayIterativeLinear;

// Brute-force: O(N^2)
function maximumSubarrayIterative(items) {
  let max = Number.NEGATIVE_INFINITY;
  let start = -1;
  let end = -1;
  for (let i = 0; i < items.length; i++) {
    let sum = 0;
    for (let j = i; j < items.length; j++) {
      sum += items[j];
      if (sum > max) {
        max = sum;
        start = i;
        end = j;
      }
    }
  }
  return [max, start, end];
}

/**
 * Kadane's Algorithm (Optimal): O(N)
 * Track the sum of the current subarray.
 * If greater than the existing maxsubarray, replace it,
 * otherwise, keep extending the subarray until its sum is negative.
 * If so, the true maxsubarray is either the existing one or subarray that doesn't contain the current one,
 * as negative sum doesn't contribute to the maxsubarray.
 */
function maximumSubarrayIterativeLinear(items) {
  let max = Number.NEGATIVE_INFINITY, maxStart = -1, maxEnd = -1;
  let sum = 0, truncatedIndex = 0;
  for (let i = 0; i < items.length; i++) {
    sum += items[i];
    if (sum > max) {
      max = sum;
      maxStart = truncatedIndex;
      maxEnd = i;
    }
    if (sum < 0) {
      truncatedIndex = i + 1;
      sum = 0;
    }
  }
  return [max, maxStart, maxEnd];
}

/**
 * Divide-and-conquer approach: Best == Worst == O(NlogN)
 * The maxsubarray is either:
 * - entirely in the left subarray
 * - entirely in the right subarray
 * - crossing the midpoint
 */
function maximumSubarray(items) {
  return _maximumSubarray(items, 0, items.length - 1);
}

function _maximumSubarray(items, start, end) {
  if (start >= end) {
    return [items[start], start, end];
  }

  const mid = Math.floor((start + end) / 2);
  const [leftSum, leftStart, leftEnd] = _maximumSubarray(items, start, mid);
  const [rightSum, rightStart, rightEnd] = _maximumSubarray(items, mid + 1, end);
  const [midSum, midStart, midEnd] = _maximumSubarrayAcrossCenter(items, start, mid, end);
  if (leftSum > rightSum && leftSum > midSum) {
    return [leftSum, leftStart, leftEnd];
  }
  if (rightSum > leftSum && rightSum > midSum) {
    return [rightSum, rightStart, rightEnd];
  }
  return [midSum, midStart, midEnd];
}

function _maximumSubarrayAcrossCenter(items, start, mid, end) {
  let leftMax = Number.NEGATIVE_INFINITY;
  let sum = 0;
  for (let i = mid; i >= start; i--) {
    sum += items[i];
    if (sum > leftMax) {
      leftMax = sum;
      maxStart = i;
    }
  }
  let rightMax = Number.NEGATIVE_INFINITY;
  sum = 0;
  for (let i = mid + 1; i <= end; i++) {
    sum += items[i];
    if (sum > rightMax) {
      rightMax = sum;
      maxEnd = i;
    }
  }
  return [leftMax + rightMax, maxStart, maxEnd];
}