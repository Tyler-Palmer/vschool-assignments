// Function Review //

// 1. Write a function declaration named isEven that console.log's "It's even!" when called
function isEven(){
    return "It's even!"
}

// 2. Write a function expression named isOdd that console.log's "It's odd!" when called
var isOdd = function(){
    return "It's odd!"
}

// 3. Write a function (expression or declaration) named 'checkNumbers' that
    // takes single parameter 'array' that is an array of numbers
        // ex:  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    
    // This function should loop through the array and call either isEven() if 
    // the current number is even, or call isOdd() if the current number is odd

    // The output should look like this => // "It's odd!"  "It's even!" etc..
function checkNumbers(array){
    var newArr = []
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            var evenNum = isEven();
            newArr.push(evenNum)
        } else if(array[i] % 3 === 0 && array[i] % 5 === 0){
            newArr.push("BuzzKill")
        } else if(array[i] % 3 === 0) {
            var oddNum = isOdd();
            newArr.push(oddNum)
        }
    }
    return newArr
}

console.log(checkNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))

// EXTRA:
    // Write a fourth function named "buzzKill" that console.log's "buzzKill"
    // Then in your 'checkNumbers' function, call "buzzKill" if the current number
        // in the array is divisible by 3 and 5.  "ex: 15"