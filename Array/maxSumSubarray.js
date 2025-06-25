// Description: Given an integer array nums, find the contiguous subarray with the largest sum, and return its sum.

// Examples
// Example1: Input: nums = [-7, -2, 3, 4, -5, 6, 7, -2]

// Output: 15

// Example1: Input: nums = []

// Output: 0

// Algorithmic Steps:

// This problem is solved with the help of Kadane's algorithm(dynamic programming technique). The algorithmic approach can be summarized as follows:

// Add a preliminary check for empty array and return sum 0 as early exit.

// Initialize two variables currentMaxSum and globalMaxSum with first value of an array. They are used to keep track of the maximum sum of the subarray ending at the current position, and the overall maximum sum respectively.

// Iterate over the input array starting from second index. Because the first value is already assigned as initial sum value.

// Calculate the current maximum sum(currentMaxSum) at each element by taking the maximum value of current element added to the current sum or current element(start a fresh sum in case of current sum is negative value).

// Calculate the global maximum sum(globalMaxSum) at each element by taking the maximum value of max sum achieved so far and current maximum sum.

// Repeat 3-5 steps until the end of an array. Finally, return globalMaxSum as the max sum of the subarray.

// Time and Space complexity:

// This algorithm has a time complexity of O(n), where n is the number of elements. This is because we iterate the array at most once.

// Here, we don't use any additional datastructure other than the two sum variables. Hence, the space complexity will be O(1).

function maxSumSubarray(nums) {
    if (nums.length === 0) return 0;
    let currentMaxSum = globalMaxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentMaxSum = Math.max(nums[i], currentMaxSum + nums[i]);
        globalMaxSum = Math.max(currentMaxSum, globalMaxSum);
    }
    return globalMaxSum;
}

// Test cases
const numbers = [-7, -2, 3, 4, -5, 6, 7, -2];
const emptyNumbers = [];
console.log("Max Subarray Sum (numbers):", maxSumSubarray(numbers));
console.log("Max Subarray Sum (emptyNumbers):", maxSumSubarray(emptyNumbers));