// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//! My solution
// function reverse(str) {
//     let reversedString = ''
//     for (let i = 0; i < str.length; i++) {
//         reversedString = reversedString + str[(str.length - 1) - i]
//     }
//     return reversedString
// }

function reverse(str) {
    const reversed = str.split('');
    return reversed.reduce((reversed, currentCharacter) => {
        return currentCharacter + reversed
    }, '')
}

reverse('Greetings')

module.exports = reverse;

// 1st given solution
// function reverse(str) {
//     1.- Convert str into an array
//     2.- Reverse array
//     3.- Join the array elements back together into a string
//     const arr = str.split('')
//     arr.reverse()
//     return arr.join('')
// }

// 2nd given solution
// function reverse(str) {
//     let reversed = ''
//     for (let character of str) {
//         reversed = character + reversed
//     }
//     return reversed;
// }
