

//1: Sort an array from smallest number to largest
const leastToGreatest= arr => arr.sort()

console.log(leastToGreatest([1, 3, 5, 2, 90, 20])) // [1, 2, 3, 5, 20, 90] 
console.log("------")

//2: Sort an array from largest number to smallest
const greatestToLeast = arr => {
    let ordered = arr.sort()
    return ordered.reverse()
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20])) // [90, 20, 5, 3, 2, 1] 

//3: Sort an array from shortest string to longest
const lengthSort = arr => {
    let ls = arr.sort(function(a,b){return b.length - a.length})
    return ls.reverse()
}
console.log('------')
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])) // ["by", "dog", "wolf", "eaten", "family"] 

//4:Sort an array alphabetically
const alphabetical = arr => arr.sort()
console.log("------")
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])) // ["by", "dog", "eaten", "family", "wolf"]

//5: Sort the objects in the array by age
console.log("---------")
const byAge = arr => arr.sort(function(a,b){return a.age - b.age})

console.log(byAge([
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]))
