//1a

function sum(x, y){
    return x + y;
}
console.log(sum(10, 8))
//error handling

try{
    if (typeof x || y !== 'number'){
        throw new Error("Please only use numbers")
    }
}

catch(error){
    console.log(error)
}


//1b

//error handling

// try{
//     function sum(x, y){
//         return x + y;
//     }
//     sum("1","2")
//     if (x || y !== typeof('number')){
//         throw new Error("Please only use numbers")
//     }else{
//         console.log(`${x} and ${y} are both numbers`)
//     }
// }

// catch(error){
//     console.log(error)
// }
