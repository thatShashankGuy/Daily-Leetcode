/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let l = m - 1 
    let r = n - 1 
    let k = m + n - 1 

    while (l >=  0 && r >=  0){
        if(nums1[l] > nums2[r]){
            nums1[k] = nums1[l]
            l--
        }else{
            nums1[k] = nums2[r]
            r -= 1 
        }
        k -= 1 
    }

    while( r >= 0){
        nums1[k] = nums2[r]
        k -= 1 
        r -= 1
    }
};