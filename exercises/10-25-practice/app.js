//1
let reverseStr = function(str){
    return str.split("").reverse().join("")
}

console.log(reverseStr("hello World"))

//2

let isNum = function(str){
   return 
}

console.log("3")

//3

let evenCheck = function(str){
    if(str % 2 === 0){
        return "even"
    }else{
        return "odd"
    }
    //return num % 2 === 0
}
console.log(evenCheck(5))

//4

let averageArray = function(arr){
    var count = 0
        for (var i = 0; i < arr.length; i++){
            count += arr[i]
        }
    //divide by the amount of items in array
    return count / arr.length
}

//5

let combineArrays = function(arr1, arr2){
    var result = []
    for (var i = 0; i < arr1.length; i++){
        result.push(arr1[i], arr2[i])
    }
    return result
}
console.log(combineArrays(["a","b","c",], [1,2,3]))