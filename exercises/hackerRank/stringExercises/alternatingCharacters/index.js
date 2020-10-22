function alternatingCharacters(s) {
  let firstCharIndex = 0;
  let secondCharIndex = 1;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[firstCharIndex] === s[secondCharIndex]) {
      count++;
    }
    firstCharIndex++;
    secondCharIndex++;
  }
  return count;
}
console.log(alternatingCharacters("AAAA"));
