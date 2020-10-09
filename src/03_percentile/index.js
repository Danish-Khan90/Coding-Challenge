// One research company wants to build the dashboard where they will be able to see which cities have population 
// that is equal or above 90th percentile of all the cities they have information on.
// 
// To calculate percentile, follow these steps:
// 
// For example we have these seven values: 1,3,7,5,9,5,2
// 
// percentile = 90 //90th percentile
// value_count = 7 //number of provided values
// 
// index = (percentile / 100) * value_count)
// 
// If index is not an integer, round it always to the bigger number.
// 
// If you sort the array, index should tell you the starting element of a subarray that is needed. In our example
// the result is array with element 9.

exports.percentile = function(percentile, data) {
    const valueCount = data.length;
    const index = Math.ceil((percentile/ 100) * valueCount);
    const sortedArr = mergeSort(data);
    return sortedArr.slice(index);
}

mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

 merge = (arr1, arr2) => {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        }
        else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}