// Write two functions that mimic the .every and .some array methods.

// every(arr, callback): Given an array and a callback function, return true or false based on whether each element of the array, when inserted as a parameter to the callback, returns true.

// Example:

// every([1,2,"3"], (num)=>{
//   return typeof num === "number";
// });
// // returns false

// some(arr, callback): Given an array and a callback function, return true or false based on whether at least ONE element of the array, when inserted as a parameter to the callback, returns true.

// Example:

console.log(someMimic(["ben", "jacob", "bob"], (name)=>{
  return name === "jacob";
}))
// // returns true


// Every

function everyMimic(arr,func) {
    let func
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i]) === true){
            func = true
        }else{
            return false
        }
    }
    return func
}

// Some

function someMimic(arr, func) {
    for (let i = 0; i < arr.length; i++){
        if (func(arr[i]) === true){
            return true
        }
    }
    return false
}
