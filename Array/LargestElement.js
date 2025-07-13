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
console.log("largest element:", largestElement(array))

// Optimal approach is this : let first create a variable and assume the index 0 will be the largest element and then compare the others element and then update the largest element and update it and retrun it
// Time complexity = O(N) , space complexity=O(1)


// find the largest element using Sorting 

function largestElementUsingSort(arr) {
    if (arr.length === 0) {
        return null;
    }

    arr.sort(function (a, b) {
        return a - b;
    });

    return (arr[arr.length - 1])
}

let array = [5, 9, 6, 8, 7]
console.log("Largest Element:", largestElementUsingSort(array));


//  find the largest element using sorting it will arrange the element in ascending order then return it .
// time complexity = O(N log N) Space complexity =O(1)