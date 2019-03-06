// Given an array of strings, find the 3 adjacent elements with the longest combined length. Return them in the form of an array.

// Example
// function combined(arr){
//     // Find the 3 adjacent elements with longest combined length
// }

// combined(["this", "is", "an", "array"])
// // Output:  ["is", "an", "array"]
//     // they have the longest combined length of any 3 adjacent elements. (9 characters)
//     // In contrast, ["this", "is", "an"] only has a combined length of 8 characters


const combined = arr => {
    let add = []
    for (let i = 0; i < arr.length -1; i++){
        if (arr[i].length > arr[i + 1].length){
            add.push(arr[i])
        }
    }
    return add
}

console.log(combined(["this", "is", "an", "array", "dog"]))