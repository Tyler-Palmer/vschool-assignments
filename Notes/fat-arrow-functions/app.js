// // ES6 (fat) Arrow functions
    // let & const
    // spread and rest 

    // fat arrow functions

    // Function Expression es5
    var add = function(a, b){
        return a + b
    }

    // Function Expression es6
    const add = (a, b) => {
       return a + b
    }

    // oooo look how clean
    const add  = (a, b) => a + b
    const mult = (a, b) => a * b
    const div  = (a, b) => a / b
    const sub  = (a, b) => a - b

    // DEFAULT PARAMETERS //
    // default parameters will set default values to parameters
    // in the case that a user does not provide arguments when they
    // call the function.  If the user does provide a value, the 
    // default parameters are replaced with the user's given values.
    function add(a = 1, b = 2){
        return a + b
    }

    console.log(add())     // 3
    console.log(add(5, 5)) // 10

    // Fat arrow functions do not need {} and return statement
    // if the function  returns a single expression like the 
    // following
    const sayPhrase = phrase => console.log(phrase)
    

    const array = [5, 2, 6, 4, 2, 6, 4, 3]

    // ES5 higher order method with anonymous `function`
    const lessThan3 = array.filter(function(number){
        return number < 3
    })

    // ES6 higher order method with anonymous `(number) =>`
    // The parenthesis around (number) are not necessary
    // since this function is using a single parameter
    const lessThan3 = array.filter(number => number < 3)

    // console.log(lessThan3)





// const array = [1, 2, 3, 4, 5, 6, 7, 8]
// const mappedArray = array.map(num => num + 1)
// console.log(mappedArray)


// const button = document.createElement('button')

// Other instances of ES6 arrow functions
    // button.addEventListener("click", () => {
    //     console.log("I've been clicked")
    // })






