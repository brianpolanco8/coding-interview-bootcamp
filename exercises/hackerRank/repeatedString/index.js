function repeatedString(s, n) {
  const result = [];
  let counter = 0;
  // iterate over s.length < n
  for (let i = 0; counter < n; i++) {
    result.push(s[i]);
    if (i === s.length - 1) {
      i = 0;
    }
    counter++;
  }
  return result;
}

console.log(repeatedString("aba", 10));


aba 
