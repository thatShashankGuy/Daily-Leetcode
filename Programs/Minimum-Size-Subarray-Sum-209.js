/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0 
    let total = 0 
    let minLength = Number.MAX_SAFE_INTEGER
    for(right = 0 ; right < nums.length; right++){
        total += nums[right] 

        while (total >= target){
            minLength = Math.min(minLength, right-left + 1)
            total -= nums[left] 
            left++
        }
    }

    if(minLength === Number.MAX_SAFE_INTEGER) return 0 
    return minLength

};
