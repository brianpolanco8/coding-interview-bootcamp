// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

}




module.exports = vowels;

// my solution, worked
// function vowels(str) {
//     let vowels = 0
//     for (let char of str) {
//         if (isVowel(char)) {
//             vowels = vowels + 1;
//         }
//     }
//     return vowels;
// }

// function isVowel(char) {
//     switch (char.toLowerCase()) {
//         case 'a':
//             return true

//         case 'e':
//             return true
//         case 'i':
//             return true

//         case 'o':
//             return true
//         case 'u':
//             return true
//         default:
//             return false
//     }
// }


//first given solution
// function vowels(str) {
//     let count = 0
//     const checker = ['a', 'e', 'i', 'o', 'u'];
//     for (let char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

second given solution
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0

}