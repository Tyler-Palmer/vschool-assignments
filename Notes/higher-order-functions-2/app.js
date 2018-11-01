// var numbers = [1,2,3];

// var numTotal = numbers.reduce(function(total, num){
//     return total + num
// })

// console.log(numTotal)

// var sortedArray = [1,57,93,2,13];

// sortedArray.sort(function(a,b){
//   //a - b sorts low to high
//   //b - a sorts high to low
//   return b - a
// })

// var sortedWords = ['dog', 'cat', 'ant', 'mouse']
// sortedWords.sort()

// console.log(sortedWords)


// var numbers = [12,54,3,62,19,79];

// var foundNumber = numbers.find(function(number){
//   return number < 5
// })

// console.log(foundNumber)

var numbers = [13,30,5,62,18,53]

// var someNum = numbers.some(function(number){
//   return number > 100
// })

// console.log(someNum)

var everyNum = numbers.every(function(number){
  return number < 100 
})

console.log(everyNum)