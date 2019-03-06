//Make an array of numbers that are doubles of the first array

function doubleNumbers(arr){
    var newArr = arr.map(function(item){
                return item * 2
    })
    console.log(newArr)
}

doubleNumbers([2, 5, 100]); // [4, 10, 200]

//Take an array of numbers and make them strings

function stringItUp(arr){
    var newArr = arr.map(function(item){
            return item.toString()
    })
    console.log(newArr)
}

stringItUp([2, 5, 100]); // ["2", "5", "100"]

//Capitalize each of an array of names

function capitalizeNames(arr){
    var newArr = arr.map(function(item){
                return item.charAt(0).toUpperCase() + item.slice(1, item.length).toLowerCase(); 
    })
    console.log(newArr)
}

capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

//Make an array of strings of the names

function namesOnly(arr){
    var newArr = arr.map(function(item){
                if(item.age >= 18){
                    return (`${item.name} can go to The Matrix`)
                }else{
                    return(`${item.name} is under age!!`)
                }
    })
    console.log(newArr)
}

namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

//Make an array of the names in h1s, and ages in h2s
console.log("last function...")
function readyToPutInTheDOM(arr){
    newArr = arr.map(function(item){
                return(`<h1>${item.name}</h1><h2>${item.age}</h2>`)
    })
    console.log(newArr)
}
readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])

// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]