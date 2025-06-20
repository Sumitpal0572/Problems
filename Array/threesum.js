// Description: Given an array of integers, return an array of triplets(in any order) such that i != j != k and nums[i] + nums[j] + nums[k] = 0.

// Note that the solution set must not include duplicate triplets(i.e., [1, 0, 0] and[0, 1, 0] are duplicative).

//     Examples:
// Example 1
// Input: [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]

// Example 2
// Input: [1, 4, 5, 1]
// Output: []

// Example 3
// Input: [0, 0, 0]
// Output: [[0, 0, 0]]

// Algorithmic Steps
// The problem is solved using the two-pointer technique after sorting the array.Below are the detailed steps:

// Sort the Array:

// Sort the input array in ascending order.This simplifies the process of finding triplets.
// Iterate Over the Array:

// Loop through the array using an index i from 0 to length - 2.
// Skip Duplicates for i:

// To avoid duplicate triplets, skip the iteration if the current element is the same as the previous one.
//     Two - Pointer Technique:

// Initialize two pointers: left at i + 1 and right at length - 1.
// Calculate the Sum:

// Compute the sum of nums[i] + nums[left] + nums[right].
// Check Conditions:

// If the sum is less than zero, increment the left pointer.
// If the sum is greater than zero, decrement the right pointer.
// If the sum equals zero:
// Add the triplet[nums[i], nums[left], nums[right]] to the result list.
// Move both pointers to the next unique numbers to avoid duplicates.
//     Repeat:

// Continue this process until left is no longer less than right.
// Return Results:

// Return the list of unique triplets.
// Time and Space Complexity
// Time Complexity:

// Sorting the array takes O(n log n).
// The two - pointer technique involves a nested loop, resulting in O(n²).
//     Overall, the time complexity is O(n²).
// Space Complexity:

// The algorithm uses a constant amount of extra space, making the space complexity O(1).


// Two pointer approach:- Time Complexity: O(n logn) + O(n^2) => O(n^2), Space Complexity: O(1)
function threeSum(nums, target) {

    // Sort the array to facilitate the two-pointer approach
    nums.sort((a, b) => a - b);
    const triplets = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate numbers to avoid duplicate triplets
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1, right = nums.length - 1;

        // Use two pointers to find the remaining two numbers
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                // Found a valid triplet
                triplets.push([nums[i], nums[left], nums[right]]);

                // Move left pointer to the next unique number
                left++;
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                // Move right pointer to the next unique number
                right--;
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            }
        }
    }

    return triplets;
}


function runTests() {
    const testCases = [
        { nums: [3, 3, -1, -2, 0, -2, 0, -1, 0, -1], target: 0 },
        { nums: [1, 3, 5, 1], target: 0 },
        { nums: [-4, -1, -1, 0, 1, 2], target: 0 },
        { nums: [0, 0, 0], target: 0 }, // Edge case: all zeroes
    ];

    testCases.forEach(({ nums, target }, index) => {
        console.log(`Test Case ${index + 1}:`, threeSum(nums, target));
    });
}

runTests();