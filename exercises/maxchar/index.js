// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charObj = {};
    let max = 0;
    let maxStr = '';

    for (let char of str){
        if(!charObj[char]){
            charObj[char] = 1;
        }else{
            charObj[char]++;
        }
    }
    for (let key in charObj){
        if(charObj[key] > max){
            max = charObj[key];
            maxStr = key;
        }
    }
    return maxStr

}

module.exports = maxChar;
