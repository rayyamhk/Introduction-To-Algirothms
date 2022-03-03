/**
 * Chapter 5.1 Exercise 2
 * Let N = b - a
 * T(N) = T(N)/(N+2) + O(logN) + O(1)
 * Average: O(max{logN, (N+2)/(N+1)})
 */
function Random(a, b, p = 0) {
  const diff = b - a;
  if (!p) {
    while (2 ** p <= diff) {
      p++;
    }
  }
  let r = 0;
  for (let i = 1; i <= p; i++) {
    r = 2 * r + _random();
  }
  // 1 / (b - a + 2) probability to hit this condition
  if (r > diff) {
    return Random(a, b, p);
  }
  return r;
}

// Return 0 and 1 with same probability
function _random() {
  const num = Math.random()
  if (num < 0.5) {
    return 0;
  }
  return 1;
}

// _verify1()

/**
 * Chapter 5.1 Exercise 3
 * T(p) = 1/(2p^2 - 2p + 1)T(p) + O(1)
 * Average: O(N/N-1), where N = 2p^2 - 2p + 1
 */

function unbiasedRandom(p) {
  const first = _biasedRandom(p);
  const second = _biasedRandom(p);
  // probability p(1-p) hit this condition
  if (first === 0 && second === 1) {
    return 0;
  }
  // probability p(1-p) hit this condition
  if (first === 1 && second === 0) {
    return 1;
  }
  // probability 2p^2 - 2p + 1 repeat
  return unbiasedRandom(p);
}

// Return 1 with probability p and 0 with probability 1-p
function _biasedRandom(p) {
  const num = Math.random();
  if (num < p) {
    return 1;
  }
  return 0;
}

// _verify2();

// verifications
function _verify1() {
  const map = {};
  for (let i = 0; i < 10000; i++) {
    const num = Random(0, 9);
    const freq = map[num];
    if (freq) {
      map[num] = freq + 1;
    } else {
      map[num] = 1;
    }
  }

  console.log(Object.entries(map).sort((a, b) => a[1] - b[1]).reduce((prev, curr) => {
    const [num, freq] = curr;
    prev[num] = freq;
    return prev;
  }, {}));
}

function _verify2() {
  const map = {};
  for (let i = 0; i < 10000; i++) {
    const num = unbiasedRandom(0.1);
    const freq = map[num];
    if (freq) {
      map[num] = freq + 1;
    } else {
      map[num] = 1;
    }
  }

  console.log(Object.entries(map).sort((a, b) => a[1] - b[1]).reduce((prev, curr) => {
    const [num, freq] = curr;
    prev[num] = freq;
    return prev;
  }, {}));
}