// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reversed = "";

  reversed = n.toString();

  const asd = reversed.split("").reverse().join("");

  return parseInt(asd) * Math.sign(n);
}

reverseInt(-5);

module.exports = reverseInt;
// My solution, didn't work
// function reverseInt(n) {
//     let nToString = n.toString();
//     let reversedNumber;

//     for (let number of nToString) {
//         reversedNumber = number + reversedNumber
//     }
//     if (Math.sign(parseInt(reversedNumber)) === -1) {
//         console.log('entre')
//         return parseInt(reversedNumber) * -1
//     } else {
//         return parseInt(reversedNumber)
//     }

// }

// Given solution
// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join('');

//     // if (n < 0) {
//     //     return parseInt(reversed) * -1;
//     // } else {
//     //     return parseInt(reversed);
//     // }

//     return parseInt(reversed) * Math.sign(n);

// }

//my solution after watching instructor solution
// function reverseInt(n) {
// let nToString = n.toString();
//     let reversed = '';
//     for (let n of nToString) {
//         reversed = n + reversed
//     }
//     return parseInt(reversed) * Math.sign(n)
//  }
