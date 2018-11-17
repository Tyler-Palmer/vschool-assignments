const peopleAndPets = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: [
            {
                name: "Alfred",
                type: "dog",
                nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
            },
            {
                name: "Charles",
                type: "cat",
                nickNames: ["Charley"]
            },
            {
                name: "Bark Obama",
                type: "dog",
                nickNames: ["Barack", "Mr. President"]
            },
            {
                name: "Christopher George Latore Wallace",
                type: "dog",
                nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
            }

        ]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: [
            {
                name: "Howard",
                type: "dog",
                nickNames: []
            },
            {
                name: "Bear",
                type: "dog",
                nickNames: []
            }
        ]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: [
            {
                name: "Bird Person",
                type: "bird",
                nickNames: ["Phoenixperson"]
            },
            {
                name: "Krombopulos Michael",
                type: "Gromflomite",
                nickNames: ["Assassin man"]
            },
            {
                name: "Squanchy",
                type: "Cat-person",
                nickNames: ["Squanch", "Smarf", "Thunder Cat"]
            }

        ]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 23,
        pets: [
            {
                name: "Morty Jr.",
                type: "Gazorpazorp",
                nickNames: ["Gwendolyn Jr."]
            },
            {
                name: "Snuffels",
                type: "dog",
                nickNames: ["Snowball"]
            }

        ]
    }
];

const peoplePets = obj => {
    const newArr = []
    obj.forEach(function(item){
        item.pets.forEach(pet => newArr.push(`<li>${pet.name}</li>`))
    })
    return newArr
}
console.log(peoplePets(peopleAndPets))
console.log('----')

///if owners older than 20

const peoplePets2 = obj => {
    const newArr = []
    obj.forEach(function(item){
        if (item.age > 20){
        item.pets.forEach(pet => newArr.push(`<li>${pet.name}</li>`))
        }
    })
    return newArr
}
console.log(` The pets with owners who are over 20 yrs old are: ${peoplePets2(peopleAndPets)}`)
console.log('----')

//older than 20 and pets who have nicknames

const peoplePets3 = obj => {
    const newArr = []
    obj.forEach(function(item){
        if (item.age > 20){
        item.pets.forEach(pet => newArr.push(`<li>Pet: ${pet.name} Nickname: ${pet.nickNames}</li>`))
        }
    })
    return newArr
}
console.log(` The pet's names, if they have nicknames, with  owners who are over 20 yrs old are: ${peoplePets3(peopleAndPets)}`)
console.log('----')

//everyone that has at least one dog and sort them by age

// const peoplePets4 = obj => {
//     const newArr = []
//     obj.forEach(function(item){
//         if (item.pet){
//         item.pets.forEach(pet => {
//             if(pet.type === 'dog'){
//                 newArr.push(pet)
//             }
//         })
//         }
//     })
//     return newArr
// }

// const peoplePets4 = obj => {
//     const newArr = []
//     obj.forEach(function(item){
//         if (item.pet.forEach(pet => {
//             if(pet.type === 'dog'){
//                 newArr.push(item.name.sort(item.age))
//             }
//         }))
//         item.pets
//     })
//     return newArr
// }

const peoplePets4 = obj => {
    const newArr = []
    obj.forEach(function(item){
        if (item.pets){
        item.pets.forEach(pet => newArr.push(pet))
        }
    })
    for (let i = 0; i < newArr.length; i++){
    }
}

console.log(peoplePets4(peopleAndPets))
console.log('----')