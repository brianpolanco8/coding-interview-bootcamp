// https://www.hackerrank.com/challenges/reduced-string/problem

function superReducedStirng(s) {
  let result = [];

  for (let char of s) {
    if (result[result.length - 1] !== char) {
      result.push(char);
    } else if (result[result.length - 1] === char) {
      result.pop();
    }
  }

  return result.join("");
}
