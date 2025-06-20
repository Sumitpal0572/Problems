function findTwoSumIndices(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        const total = nums[left] + nums[right];

        if (total === target) {
            return [left + 1, right + 1]; 
        } else if (total > target) {
            right--; 
        } else {
            left++; 
        }
    }

    return [-1, -1];
}


let nums1 = [2, 7, 11, 15, 9];
let target1 = 16;

console.log(findTwoSumIndices(nums1, target1))