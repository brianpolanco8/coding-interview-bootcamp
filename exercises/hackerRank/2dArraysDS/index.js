function solution3(S, X, Y) {
  let r2 = Number.MAX_SAFE_INTEGER;
  let j = {};
  for (let i = 0; i < S.length; i++) {
    let letter = S[i];
    let d2 = X[i] * X[i] + Y[i] * Y[i];
  }

  let ans = 0;
  for (let i = 0; i < S.length; i++) {
    if (X[i] * X[i] + Y[i] * Y[i] <= r2) {
      ans++;
    }
  }
  return ans;
}

console.log(solution3("ABDCA", [2, -1, -4, -3, 3], [2, -2, 4, 1, -3]));

function solution2(S, K) {
  let length = Number.MAX_SAFE_INTEGER;
  S.split("").forEach((char, index, arr) => {
    if (K > arr.length) {
      return arr.length;
    }
    let tempStr = S.replace(S.substr(index, K), "");
    let countObj = {};
    tempStr.split("").forEach((char) => {
      countObj[char] == undefined ? (countObj[char] = 1) : countObj[char]++;
    });
    let ansStr = "";
    for (const char in countObj) {
      ansStr += `${countObj[char] == 1 ? "" : countObj[char]}${char}`;
    }
    length = ansStr.length < length ? ansStr.length : length;
  });
  return length;
}

function solution1(s) {
  let countA = 0;
  for (let char of s) {
    if (char == "a") {
      countA++;
    }
  }
  if (countA % 3 !== 0) {
    return 0;
  }
  if (countA == 0) {
    return Math.floor(((s.length - 1) * (s.length - 2)) / 2);
  }
  let l1 = 0;
  let l2 = 0;
  let currentCount = 0;
  for (let char of s) {
    if (char == "a") {
      currentCount++;
    }
    if (currentCount == countA / 3) {
      l1++;
    }
    if (currentCount == (2 * countA) / 3) {
      l2++;
    }
  }
  return l1 * l2;
}

solution1("babaa");
