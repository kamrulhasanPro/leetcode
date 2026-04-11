/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // let totalSum = 0;

    if(!nums.length){
        return init;
    }

    let acumn = init;

    for(let i = 0; i < nums.length; i++){

       const val =  fn(acumn, nums[i]);
       console.log(nums[i], {val, acumn})
        acumn = val;
    }

    return acumn
};