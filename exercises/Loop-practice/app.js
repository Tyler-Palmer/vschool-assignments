// for (var i = 0; i <= 100; i++){
//     if(i%2 !== 0){
//         console.log(i + " is odd")
//     }else{
//         console.log(i + " is even")
//     }
// }
//

//party

// var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]

// for (var i = 0; i < eventsAtWork.length; i++){
//     if(eventsAtWork[i] === "party"){
//         console.log(i + " hooray")
//     }
// }

//trues

// var booleans = [true, true, false, true, false, false, false]
// var truthCounter = 0
// for (var i = 0; i < booleans.length; i++){
//     if(booleans[i] === true){
//         truthCounter++
//     }
// }
// console.log(truthCounter)

//isAdmin

var users = [
    {
      name: "Sophie",
      age: 12
    },
    {
      name: "Larry",
      age: 32
    },
    {
      name: "Cathy",
      age: 40
    }
  ]

  console.log(users)
  for(var i = 0; i < users.length; i++){
    users[i].isAdmin = true  
  }
  console.log(users)