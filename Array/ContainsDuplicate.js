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


nums=[1,2,3,4,5,4]
console.log(containDuplicateusingSet(nums));