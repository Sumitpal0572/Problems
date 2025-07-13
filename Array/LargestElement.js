function largestElement(arr) {
    if (arr.length === 0) {
        return null;
    }

    let largestElement = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[0]) {
            largestElement = arr[i]
        }
    }
    return largestElement;
}

array = [5, 8, 3, 2, 4];
console.log("lagest element:", largestElement(array))

// Optimal approach is this : let first create a variable and assume the index 0 will be the largest element and then compare the others element and then update the largest element and update it and retrun it 
// Time complexity = 0(N)