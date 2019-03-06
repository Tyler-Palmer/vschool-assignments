//prelim

// for(i=0; i <= 9; i++){
//     console.log(i)
// }

// for(i=9; i>=0; i--){
//     console.log(i)
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]
// for (i=0; i < fruit.length; i++){
//     console.log(fruit[i])
// }

//bronze

// var emptyArr = []
// for(i = 0; i <= 9; i++){
//     emptyArr.push(i)
// }
// console.log(emptyArr)

// for(i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// emptyArr = []

// for(i = 0; i < fruit.length; i++){
//     if(i%2 === 0){
//         emptyArr.push(fruit[i])
//     }
// }
// console.log(emptyArr)

//silver

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

// for(i = 0; i < peopleArray.length; i++){
//     console.log(peopleArray[i].name)
// }

// var namesArray = []
// var occupationsArray = []
// function namesOccupationPush(){
//   for(i = 0; i < peopleArray.length; i++){
//     namesArray.push(peopleArray[i].name)
//     occupationsArray.push(peopleArray[i].occupation)
//   }
// }
// namesOccupationPush()
// console.log(namesArray, occupationsArray)

var namesArray = []
var occupationsArray = []
function everyOther(arr){
  for(let i = 0; i < arr.length; i++){
    if(i % 2 === 0){
      occupationsArray.push(arr[i].occupation)
    }else{
      namesArray.push(arr[i].name)
    }
  }
  return `Names: ${namesArray} \nOccupations: ${occupationsArray}`
}
console.log(everyOther(peopleArray))