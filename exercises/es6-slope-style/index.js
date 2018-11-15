
//1_1

const collectAnimals = (...anm) => anm
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
console.log('-----')
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//1_2

const combineFruit = (fruit, sweets, vegetables) => {    
    return {fruit, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrit"]))
console.log('-----')


//1_3

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
};
  
const {location, duration} = vacation

const parseSentence = () => `We're going to have a good time in ${location} for ${duration}`

console.log(parseSentence())
console.log('-----')


//1_4 NOT FINISHED

  function returnFirst(items){
    const firstItem = items[0]; /*change this line to be es6*/
    return firstItem
}

//into ES6
const items = ['some', 'things']
const returnFirst2 = firstItem => items[firstItem]

console.log(returnFirst2(items))
console.log('-----')

//1_5 Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const returnFavorites = arr => {
    const firstFav = arr[1]
    const secondFav = arr[2]
    const thirdFav = arr[4]
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities))
console.log('-----')


//2_1 USE REDUCE

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

const combineAnimals = (...arr) => {
    let newArr = []
    return newArr.concat(...arr)
}

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 
console.log('-----')

// ["dog", "cat", "mouse", "jackolope", "platypus"]
const combineAnimals2 = (...arr) => arr.reduce((acc, num) => [...acc, ...num])

console.log(combineAnimals2(realAnimals, magicalAnimals, mysteriousAnimals)); 
console.log('-----')


//3_1 Make more ES6-y

function product(a, b, c, d, e) {  
    var numbers = [a,b,c,d,e];
  
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }

console.log(product(1,2,3,4,5))
console.log('-----')
//ES6

const product2 = (...numbers) => numbers.reduce((acc, number) => acc * number, 1)

console.log(product2(1,2,3,4,5))
console.log('------')

//3_2
const array = ['this','is','an','array']


function unshift(array, a, b, c, d, e) {  
    return [a, b, c, d, e].concat(array);
  }

console.log(unshift(array, 1,2,3,4,5))
//ES6

const unShift = (array, ...items) => [...items, ...array]

console.log(unShift(array, 1,2,3,4,5))
console.log('-----')

//4_1

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        return {
            firstName: firstName,
            lastName: lastName
        }
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
