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


nums = [1, 2, 3, 4, 5, 4]
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

console.log(containsDuplicateUsingObject(nums))


function containsDuplicateUsingSize(nums) {
    return new Set(nums).size !== nums.length
}

console.log(containsDuplicateUsingSize(nums))