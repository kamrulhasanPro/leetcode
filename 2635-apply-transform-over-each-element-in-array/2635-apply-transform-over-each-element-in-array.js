/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newArray = []
    for(let n = 0; n<arr.length; n++){
        console.log(n, arr[n])
        const value = fn(arr[n], n)
        console.log(value)
        newArray.push(value)
    }
    console.log(newArray);
    return newArray;
};