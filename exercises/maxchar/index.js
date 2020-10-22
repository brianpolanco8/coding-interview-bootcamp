// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {


}

module.exports = maxChar;


//Given solution, I didn't know how to work with it

// //turn str into an object
// const charMap = {};
// let max = 0;
// let maxChar = '';
// for (let char of str) {
//     if (!charMap[char]) {
//         charMap[char] = 1
//     } else {
//         charMap[char]++
//     }
// }

// //itereate over object values and locate char with maximum values
// for (let char in charMap) {
//     if (charMap[char] > max) {
//         max = charMap[char];
//         maxChar = char
//     }
// }

// return maxChar;
