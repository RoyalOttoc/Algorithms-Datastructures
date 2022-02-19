// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     numArray = n.toString().split('')
//     if(numArray[0] === '-'){
//         const withoutMinus = numArray.splice(1);
//         const result = '-' + withoutMinus.reverse().join('')
//         return Number.parseInt(result, 10)
//     }
//     return Number.parseInt(n.toString().split('').reverse().join(''))

// }

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('')

    return Number.parseInt(reversed, 10) * Math.sign(n);
    
}

module.exports = reverseInt;
