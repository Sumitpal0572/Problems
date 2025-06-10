function findTwoSumIndices(nums, target){
    let left = 0, right = nums.length-1;

    while(left < right) {
        const total = nums[left] + nums[right];

        if(total === target) {
            return [left+1, right+1]; // Return 1-based indices 
        } else if(total > target) {
            right--; //Move the right pointer leftward
        } else {
            left++; //Move the left pointer rightward
        }
    }

    return [-1, -1];
}


let nums1 = [2,7,11,15,9];
let target1 = 16;

console.log(findTwoSumIndices(nums1,target1))