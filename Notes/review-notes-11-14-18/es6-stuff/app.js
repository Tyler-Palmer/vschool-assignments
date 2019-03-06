// ES6
        // const & let  ( js scoping )
        // String literals
        // Arrow functions
        // Object and Array Destructuring  
        // Object Literals
        // Default Parameters
        // Spread and Rest(gather)
        // Import/Export

// const & let
    // const:  Constant variable, cannot be re-assigned/changed
    // let: variable, can be re-assigned/changed

//     function scoping(){
//         let a
//         if(true){
//             a = "hello"
//         }
//         return a
//     }

//  console.log(scoping())
    
 // var:         local scope
 // const & let: lexical scope (nearest { })
 


// // String Literals
// var name = "Joe"
// console.log(`${name} says hi`)


// Arrow Functions

// var fizzBuzz = function(){

// }

// const fizzBuzz = () => {

// }

const arr = [6, 2, 7, 4, 1, 5, 3]

// SORT

    // arr.sort(function(a, b){
    //     return a > b
    // })

    // arr.sort((a, b) => a > b)
    // console.log(arr)

// MAP

    // const mappedArray = arr.map(function(number){
    //     return number + 2
    // })

    // const mappedArray = arr.map(number => number + 2)

    // console.log(mappedArray)

// REDUCE

    // const total = arr.reduce(function(final, num){
    //     return final + num
    // }, 10)

    // const total = arr.reduce((final, num) => final + num, 10)

    // console.log(total)



// Object and Array Destructuring  

    // const person = {
    //     name: "Steve",
    //     age: 61,
    //     friends: ["Joe", "Guy"]
    // }

    // const { name, age, friends } = person

    // const vegetables = ["carrot", "pineapple", "tomato"]
    // const [carrot, pineapple] = vegetables
    // console.log(carrot, pineapple)



// Object Literals
    // const alpha = "a"
    // const beta = "b"
    // const charlie = "c"

    // const newObj = {
    //     alpha,
    //     beta,
    //     charlie
    // }

    // console.log(newObj.alpha)



// Default Parameters
    // const addition = (a, b = 5) => {
    //     return a + b
    // }

    // console.log(addition(3))    // 8
    // console.log(addition(3, 5)) // 5


// Spread and Rest(gather)
    // Spread -> spread out array items
    // Rest   -> A function parameter

                // REST
    // const getTotal = (...nums) => {
    //     console.log(nums)

    // }

    // getTotal(1, 2, 3, 4, 5, 6, 7)


    // const arr1 = [1, 2, 3, 4]
    // const arr2 = [5, 6, 7, 8]

    //                 // SPREAD
    // const newArr = [...arr1, ...arr2]
    // console.log(newArr)
    // const person = {name: 'joe', age: 30}


// Import/Export
    //import:   const ask = require('readline-sync')
    //export:   module.exports = whateverWereExporting

        // Main.js
    import function1 from 'Functions.js'
    import { function2, function3, function4 } from 'Functions.js'

        // Functions.js
    export default function1
    export function2
    export function3
    export function4