// // Error Handling 
// var a = 1

// try {
//     // whatever code in here throws an error
//     if(a !== 0){
//         throw new Error("The variable a was not equal to 0")
//     }
// }

// catch(error) {
//     console.log(error)
// }

// // Run this code no matter what happens in the try and catch blocks
// finally {
//     console.log("I am running no matter what!")
// }



function greeting(greetingType){
    if(typeof greetingType !== "string"){ 
       throw new Error("You must provide a string as input!")
    }
    return greetingType
}


try {
    greeting(4)
}

catch(error){
    console.log(error)
}






