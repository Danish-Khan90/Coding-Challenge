// Given the array of integers, replace every element with it's neighbouring numbers, then find the duplicate numbers
// and sum them up. It is guaranteed that provided integers are unique, which means they will not repeat.
// 
// For example for the input: -3,5,8,-1,6,11
// resulting array after replacement would be -4,-2,4,6,7,9,-2,0,5,7,10,12 and duplicate numbers are -2,7 and the 
// result will be 5.

exports.overlappingSpreads = function(data) {
    let newArray = [];
    for (let i = 0; i < data.length; i++) {
        newArray.push(data[i] - 1);
        newArray.push(data[i] + 1);
    }
    const strArray = newArray.toString();

    const finalArray = [];
    const charMap = {};
    for (let i = 0; i < strArray.length; i++) {
        const char = str.charAt(i);
        charMap[char] = ++charMap[char] || 1;
    }
    for (let chars in charMap) {
        if (charMap[chars] > 1) {
            finalArray.push(Number(charMap[chars]));
        }
    }
    let sum = 0;
    for (let j = 0; j < finalArray.length; j++) {
        sum += finalArray[j];
    }

    return sum;
}