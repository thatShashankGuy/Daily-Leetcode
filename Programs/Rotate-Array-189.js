/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    var helper = function(l,r){
    let temp
    while(l < r ){
        temp = nums[l]
        nums[l] = nums[r]
        nums[r] = temp
        l++
        r--
    }

    }

    helper(0,nums.length - 1)
    helper(0,k-1)
    helper(k,nums.length - 1)

    return nums
};

