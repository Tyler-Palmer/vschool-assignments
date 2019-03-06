//1. Make a function that takes a string nd returns that string reversed

let reverseStr = function(str){
    let reversed = str.split('').reverse()
    return reversed.join('')
}
console.log(reverseStr("abcde"))

//2. Make a function that takes a string and returns true if the string could be a number else return false

let possibleNum = function(str){
    if(Number(str) == str ){
        console.log("True it's a number")
    }else{
        console.log("False its not a number")
    }
}

possibleNum("5")

//3. Make a function that takes a number and returns true if the number is even else return false

let isEven = function(num){
    if(num % 2 === 0){
        console.log("True")
    }else{
        console.log("False")
    }
}

isEven(44)

//4. Make a function that takes an array and returns the average of the array

let averageArray = function(arr){
    let total = 0
    for (let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total/arr.length
}

console.log(averageArray([5,6,7,8,9,10]))

//5. Make a function that takes two arrays and returns a single array of the items from the arrays added alternatingly

let combineArrays = function(arr1, arr2){
    newArr = []
    for (let i = 0; i < arr1.length; i++){
        newArr.push(arr1[i],arr2[i])
    }
    return newArr
}

console.log(combineArrays([1,2,3], ["a","b","c"]))