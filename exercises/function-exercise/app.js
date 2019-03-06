// function addNumbers(number1, number2){
//     return number1 + number2
// }
// console.log(addNumbers(1,2))

// function largestNumber(num1, num2, num3){
//     if(num1 > num2 && num1 > num3){
//         return num1
//     }else if(num2 > num1 && num2 > num3){
//         return num2
//     }else if(num3 > num1 && num3 > num2){
//         return num3
//     }else{
//         return "enter only numbers"
//     }
// }

// console.log(largestNumber(77,55,3))

// function evenOdd(num){
//     if(num % 2 === 0){
//         return 'even'
//     }else{
//         return 'odd'
//     }
// }
// console.log(evenOdd(8))

function funnyString(str){
    if(str.length <= 20){
        return str + str
    } else{
        str1 = Math.floor(str.length / 2)
        return str.slice(0, str1)
    }
}

console.log(funnyString('thisisanexampleofalongstringthatwillbecutdownwiththisfunction'))