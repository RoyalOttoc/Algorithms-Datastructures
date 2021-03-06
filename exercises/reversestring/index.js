// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     let strLen = str.length;
//     let reversedStr = "";
//     let num = 1
//     while((strLen - num) >= 0){
//         reversedStr += str[strLen - num];
//         num++;
//     }
//     return reversedStr
// }

// function reverse(str){
//     return str.split("").reverse().join("")
// }

// function reverse(str){
//     let reversed = '';

//     for (let character of str){
//         reversed = character + reversed;
//     }
//     return reversed;
// }

function reverse(str){
    return str.split('').reduce((reversed, char)=> char + reversed, '')
}

module.exports = reverse;
