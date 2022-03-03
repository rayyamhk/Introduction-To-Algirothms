// Chapter 4.2 Strassen’s algorithm for matrix multiplication

module.exports = {matrixMultiplication, StrassenAlgorithm};

/**
 * O(N^3)
 * Assume both A and B are nonempty size compatible square matrices.
 */
function matrixMultiplication(A, B) {
  const size = A.length;
  const C = new Array(size);
  for (let i = 0; i < size; i++) {
    const row = new Array(size);
    for (let j = 0; j < size; j++) {
      let sum = 0;
      for (let k = 0; k < size; k++) {
        sum += A[i][k] * B[k][j];
      }
      row[j] = sum;
    }
    C[i] = row;
  }
  return C;
}

/**
 * O(N^log7) ~ O(N^2.81)
 * Assume A, B are size of 2^k
 * Can further optimize without cloning the matrices when partitioning.
 * 
 * For general implementation, can either apply padding, or apply conventional multiplication when size is small.
 * e.g. 1600 => 800 => 400 => 200 => 100 => 50 => 25, and apply O(N^3) multiplication on 25 x 25 matrices.
 * 
 * Drawbacks of Strassen's algorithm:
 * - The constant factor behind O(N^2.81) is larger than O(N^3).
 * - There exists better algorithm for sparse matrices.
 * - Numerically unstable compare with O(N^3).
 * - Larger memory consumption.
 * 
 * In practice, apply Strassen when the matrix size is above certain threshold which is highly system dependent,
 * and apply simpler method otherwise.
 */
function StrassenAlgorithm(A, B) {
  // base case
  if (A.length === 1 && B.length === 1) {
    return [[A[0] * B[0]]];
  }
  const [A1, A2, A3, A4] = partition(A);
  const [B1, B2, B3, B4] = partition(B);
  const S1 = subtract(B2, B4);
  const S2 = add(A1, A2);
  const S3 = add(A3, A4);
  const S4 = subtract(B3, B1);
  const S5 = add(A1, A4);
  const S6 = add(B1, B4);
  const S7 = subtract(A2, A4);
  const S8 = add(B3, B4);
  const S9 = subtract(A1, A3);
  const S10 = add(B1, B2);

  const P1 = StrassenAlgorithm(A1, S1);
  const P2 = StrassenAlgorithm(S2, B4);
  const P3 = StrassenAlgorithm(S3, B1);
  const P4 = StrassenAlgorithm(A4, S4);
  const P5 = StrassenAlgorithm(S5, S6);
  const P6 = StrassenAlgorithm(S7, S8);
  const P7 = StrassenAlgorithm(S9, S10);

  const C1 = subtract(add(P5, P4), subtract(P2, P6));
  const C2 = add(P1, P2);
  const C3 = add(P3, P4);
  const C4 = subtract(add(P5, P1), add(P3, P7));
  return merge(C1, C2, C3, C4);
}

function partition(A) {
  const size = A.length;
  const half = size / 2;
  const A1 = [...Array(half)].map(() => Array(half).fill()); // top-left
  const A2 = [...Array(half)].map(() => Array(half).fill()); // top-right
  const A3 = [...Array(half)].map(() => Array(half).fill()); // bottom-left
  const A4 = [...Array(half)].map(() => Array(half).fill()); // bottom-right

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i < half && j < half) {
        A1[i][j] = A[i][j];
      } else if (i < half && j >= half) {
        A2[i][j - half] = A[i][j];
      } else if (i >= half && j < half) {
        A3[i - half][j] = A[i][j];
      } else {
        A4[i - half][j - half] = A[i][j];
      }
    }
  }
  return [A1, A2, A3, A4];
}

function merge(A1, A2, A3, A4) {
  const size = A1.length;
  const double = size * 2;
  const A = [...Array(double)].map(() => Array(double).fill());
  for (let i = 0; i < double; i++) {
    for (let j = 0; j < double; j++) {
      if (i < size && j < size) {
        A[i][j] = A1[i][j];
      } else if (i < size && j >= size) {
        A[i][j] = A2[i][j - size];
      } else if (i >= size && j < size) {
        A[i][j] = A3[i - size][j];
      } else {
        A[i][j] = A4[i - size][j - size];
      }
    }
  }
  return A;
}

function add(A, B) {
  const size = A.length;
  const C = new Array(size);
  for (let i = 0; i < size; i++) {
    const row = new Array(size);
    for (let j = 0; j < size; j++) {
      row[j] = A[i][j] + B[i][j];
    }
    C[i] = row;
  }
  return C;
}

function subtract(A, B) {
  const size = A.length;
  const C = new Array(size);
  for (let i = 0; i < size; i++) {
    const row = new Array(size);
    for (let j = 0; j < size; j++) {
      row[j] = A[i][j] - B[i][j];
    }
    C[i] = row;
  }
  return C;
}
