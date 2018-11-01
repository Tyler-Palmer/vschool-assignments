//Turn an array of numbers into a total of all the numbers

function total(arr){
    var newArr = arr.reduce(function(total, num){
        return total + num
    })
    return newArr
}

console.log(total([1,2,3]))

//Turn an array of numbers into a long string of all those numbers

function stringConcat(arr){
    var str = arr.reduce(function(total, num){
        return String(total) + String(num)
    })
    return str
}

console.log(stringConcat([1,2,3]))

//Turn an array of voter objects into a count of how many people voted

