// Find the biggest and the smallest number in array of integers.
//
// RESTRICTIONS: do this without using sort, min or max functionalities provided by language.
// 
// For example if we have an array 10,4,5,7,99,1 the smallest number will be 1 and the biggest would be 99.
// Return it as a JSON object with properties min and max.

exports.minMax = function(data) {
    let minimum = data[0];
    let maximum = data[0];

    for (let i = 1; i < data.length; i++) {
        if (data[i] < minimum) {
            minimum = data[i];
        }
        if (data[i] > maximum) {
            maximum = data[i];
        }
    }
    const retObj = {
        max: maximum,
        min: minimum,
    }
    return JSON.stringify(retObj);
}
