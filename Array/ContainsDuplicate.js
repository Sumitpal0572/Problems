// containsDuplicate Using Set {}

function containDuplicateusingSet(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num)
    }
    return false
}


nums = [1, 2, 3, 4, 5, 6]
// console.log(containDuplicateusingSet(nums));

function containsDuplicateUsingObject(nums) {
    const seen = {}
    for (const num of nums) {
        if (seen[num]) {
            return true;
        }
        seen[num] = true
    }
    return false
}

// console.log(containsDuplicateUsingObject(nums))


function containsDuplicateUsingSize(nums) {
    return new Set(nums).size !== nums.length
}

// console.log(containsDuplicateUsingSize(nums))


function containsDuplicateUsingSort(nums) {
    nums.sort((a, b) => a - b); 
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true; 
        }
    }
    return false; 
}

console.log(containsDuplicateUsingSort(nums))


function containsDuplicateUsingBruteforce(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true; // Duplicate found
            }
        }
    }
    return false; // No duplicates
}

console.log(containsDuplicateUsingBruteforce(nums));