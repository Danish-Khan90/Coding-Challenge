// Given the array of integers, find out which numbers are odd numbers.
//
// For example if our array is 1,3,5,6,8,2,0,11 the result will be 1,3,5,11

exports.oddIntegers = function(data) {
    const results = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 !== 0) {
            results.push(data[i]);
        }
    }
    return results;
}