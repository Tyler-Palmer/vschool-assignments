//Given an array of numbers, return a new array that has only the numbers that are 5 or greater

function fiveAndGreaterOnly(arr){
   var newArr = arr.filter(function(item){
        if(item >= 5){
            return item;
        }
   })
   console.log(newArr)
}
fiveAndGreaterOnly([3,6,8,2]);

//Given an array of numbers, return a new array that only includes even numbers

function evensOnly(arr){
    var newArr = arr.filter(function(item){
         if(item % 2 === 0){
             return item;
         }
    })
    console.log(newArr)
 }
 evensOnly([3,6,8,2]);

 //Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

 function fiveCharactersOrFewerOnly(arr) {
    var newArr = arr.filter(function(item){
                if(item.length < 5){
                    return item
                }
    })
    console.log(newArr)
}

fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]) // ["by", "dog", "wolf", "eaten"]

//Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

function peopleWhoBelongToTheIlluminati(arr){
    var newArr = arr.filter(function(item){
                return item.member === true
            })
        console.log(newArr)
}

peopleWhoBelongToTheIlluminati([
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
])

//Filter out all the people who are not old enough to see The Matrix(younger than 18)
console.log("Next exercise...")

function ofAge(arr){
    var newArr = arr.filter(function(item){
            return item.age >= 18
    })
    console.log(newArr)
}

ofAge([
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