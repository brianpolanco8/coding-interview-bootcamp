// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {


}


module.exports = steps;


// My solution
// function steps(n) {

//     for (let i = 1; i <= n; i++) {
//         console.log(numberOfHashes(i) + whiteSpaces(n - i))
//     }
// }

// function whiteSpaces(n) {
//     const whiteSpacesCount = []

//     for (let i = 0; i < n; i++) {
//         whiteSpacesCount.push(" ");
//     }
//     return whiteSpacesCount.join("");
// }

// function numberOfHashes(n) {
//     const hashes = [];

//     for (let i = 1; i <= n; i++) {
//         hashes.push('#')
//     }

//     return hashes.join("")
// }


// first given solution
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = ''
//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#'
//             } else {
//                 stair += ' '
//             }
//         }
//         console.log(stair)
//     }
// }

// second given solution using recursion
// function steps(n, row = 0, stair = '') {

//     if (n === row) {
//         return;
//     }

//     if (n === stair.length) {
//         console.log(stair)
//         return steps(n, row + 1)
//     }

//     if (stair.length <= row) {
//         stair += '#'
//     } else {
//         stair += ' '
//     }
//     steps(n, row, stair);
// }