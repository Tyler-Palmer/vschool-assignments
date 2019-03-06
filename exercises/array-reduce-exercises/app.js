//Turn an array of numbers into a total of all the numbers

function total(arr){
    var newArr = arr.reduce(function(total, num){
        return total + num
    })
    return newArr
}

// console.log(total([1,2,3]))

//Turn an array of numbers into a long string of all those numbers

function stringConcat(arr){
    var str = arr.reduce(function(total, num){
        return String(total) + String(num)
    })
    return str
}

// console.log(stringConcat([1,2,3]))

//Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
    var count = 0
    arr.reduce(function(total, num){
        if (num.voted === true){
           count++
        }
    })
    return count
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted: true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)) // 7


//4: Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const shoppingSpree = (obj) => obj.reduce((acc, item) => acc + item.price, 0)

console.log("--------")
console.log(shoppingSpree(wishlist)) // 227005


//5: Given an array of arrays, flatten them into a single array
console.log("------")
const flatten = (arr) => arr.reduce((tot, item) => tot.concat(item),[])
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays))// ["1", "2", "3", true, 4, 5, 6];
