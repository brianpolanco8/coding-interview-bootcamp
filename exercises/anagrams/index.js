// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    return false;
  }

  // const aCharMap = buildCharMap(stringA);
  // const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

function funWithAnagrams(text) {
  let result = [];
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < text.length; j++) {
      if (text[i] != text[j] && !result.includes(text[i])) {
        if (anagrams(text[i], text[j])) {
          result.push(text[j]);
        }
      }
    }
  }

  console.log(text.filter((n) => !result.includes(n)).sort());
}

anagrams("hello", "llohe");

module.exports = anagrams;

// my solution, did't work
// const firstWord = stringA.replace(/[^\w]/g, "").toLowerCase().split('');
// const secondWord = stringB.replace(/[^\w]/g, "").toLowerCase().split('');

// const firstWordObject = {}
// const secondWordObject = {}

// for (let i of firstWord) {
//     if (!firstWordObject[i]) {
//         firstWordObject[i] = 1;
//     } else {
//         firstWordObject[i]++
//     }
// }

// for (let i of secondWord) {
//     if (!secondWordObject[i]) {
//         secondWordObject[i] = 1;
//     } else {
//         secondWordObject[i]++
//     }
// }

// return firstWordObject === secondWordObject

// given solution
// const aCharMap = buildCharMap(stringA);
// const bCharMap = buildCharMap(stringB);

// if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//   return false;
// }

// for (let char in aCharMap) {
//   if (aCharMap[char] !== bCharMap[char]) {
//     return false;
//   }
// }
// return true;

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// second given solution
// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//   return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// }
