/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {

    const newArray = []
    for(let i = 0; i < arr.length; i++){
        const value = fn(arr[i], i)
        console.log(i, {value})

        if(value){
            newArray.push(arr[i])
        }
    }

    return newArray

};