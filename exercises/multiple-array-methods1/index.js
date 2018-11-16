var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

// const sortedOfAge = arr => arr.map(function(item){
//     const ageArr = []
//     if(item.age >= 18){
//         ageArr.push(item)
//     }
//     return ageArr.sort(item.age)
// })

// const sortedOfAge = arr => {
//    const ageArr = []
//    const sorted = arr.sort(function(a,b){ return (a.age) - (b.age)})
//    sorted.map(function(item){
//        if (item.age >= 18){
//             ageArr.push(item)
//        }
//    })
//    return ageArr
// }

const sortedOfAge = arr => {
    const ageArr = []
    const sorted = arr.sort(function(a,b){
        if(a.lastName < b.lastName) {return -1}
        if(a.lastName > b.lastName) {return +1}
        return 0
    })
    const sorted2 = sorted.map(item => {
        if (item.age >= 18){
             ageArr.push(`<li>First Name: ${item.firstName} Last Name: ${item.lastName} Age: ${item.age}</li>`)
        }
    })
    return ageArr
 }
 


console.log(sortedOfAge(peopleArray))