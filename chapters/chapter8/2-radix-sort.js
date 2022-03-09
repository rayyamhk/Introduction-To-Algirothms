// Chapter 8.3 Radix sort

/**
 * Assumptions:
 *  - the input elements are d-digit numbers, e.g. 10000 is a 5-digit number.
 *  - each digit is of base k, e.g. binary is base 2.
 *  - The digit sort algorithm is stable and O(N + k), e.g. counting sort.
 * Worst == Best == O(d(N + k)), O(N) if d = O(1) and k = O(N).
 * 
 * Pseudocode:
 * for i from 1 to d:
 *    use a stable sort to sort the i-th digit of the input.
 * 
 * How?
 * For the k-th iteration, numbers with same k-th digit are placed together, and their relative order
 * are sorted by the (k-1)-th digit.
 * 
 * Applications:
 *  - Sort data keyed by multiple fields, e.g. Date, sort strings in alphabetical order.
 */