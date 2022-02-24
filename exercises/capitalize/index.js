// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution 2
function capitalize(str) {
  let result = ""
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if(i === 0){
      result += str[i].toUpperCase()
    }
    else if(str[i - 1] === " "){
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
    
  }
  return result
}

module.exports = capitalize;

// Solution 1
// function capitalize(str) {
   
//   let words = []
//   for (let char of str.split(' ')){
//     words.push(capFirst(char))
//   }
//   return words.join(' ')

// }

// function capFirst(str){
//   return str[0].toUpperCase() + str.slice(1)
// }