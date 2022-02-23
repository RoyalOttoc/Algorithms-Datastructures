// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 2
function anagrams(stringA, stringB){
    return cleanStr(stringA) === cleanStr(stringB)
}

function cleanStr(str){
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')
}


module.exports = anagrams;

// Solution 1
// function anagrams(stringA, stringB) {
//     const mapA = makeMap(stringA);
//     const mapB = makeMap(stringB);

//     if(Object.keys(mapA).length !== Object.keys(mapB).length){
//         return false
//     }
//     for (let key in mapA){
//         if (mapA[key] !== mapB[key]){
//             return false
//         }
//     }
//     return true
// }

// function makeMap(str){
//     const newMap = {}
//     let cleanedStr = str.replace(/[^\w]/g,"").toLowerCase()
//     for (let char of cleanedStr){
//         if(!newMap[char]) {
//             newMap[char] = 1
//         } else{
//             newMap[char]++
//         }
//     }
//     return newMap
// }