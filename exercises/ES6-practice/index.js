

// const array = [1,2,3,4,5,6,7,8]

// const mappedArray = array.map(function(num){
//     return num + 1
// })

// console.log(mappedArray)

// const mappedArray1 = array.map(num => num + 1)

// console.log(mappedArray1)

// var name = "John"
// var age = 101
// var pets = ["cat", "dog"]
// var petObjects = []

// function runForLoop1() {
//     for (var i = 0; i < pets.length; i++) {
//         var pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//             var name = "fluffy"
//         } else {
//             var name = "spot"
//         }
//         pet.name = name
//         petObjects.push(pet)
//     }
//     return name
// }

//     console.log(runForLoop1())

// let name = "John"
// const age = 101
// const pets = ["cat", "dog"]
// let petObjects = []

// function runForLoop() {
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//             let name = "fluffy"
//         } else {
//             let name = "spot"
//         }
//         pet.name = name
//         petObjects.push(pet)
//     }
//     return name
// }

// console.log(runForLoop())


//Task 1

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}
console.log(mapVegetables(carrots))

//Task 1 rewritten

const mapVegetables1 = arr => {
    return arr.map(carrot => {
        return {type: "carrot", name: carrot}
    })
}

console.log(mapVegetables1(carrots))
