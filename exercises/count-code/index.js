// Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for "d", so "cope" and "cooe" would also count.

// Return the count, including any substitutions for the letter "d".


function countCode(string){
    if(typeof string !== "string"){
        return "You must provide a string as an argument"
    }else{
        var arr = string.split('')
        var count = 0
        console.log(arr)
        for(var i = 0; i < arr.length; i++){
            if(arr[i] === 'c' && arr[i+1] === 'o' && arr[i+3] === 'e'){
                count += 1
            }else if (arr[i].toUpperCase() && arr[i+1] === 'o' && arr[i+3] === 'e'){
                count += 1
            }
        }
        return count
    }
}
console.log(countCode("HodehelloFode"))
module.exports = countCode