// Loops

// Single Dimension Array
var myArr = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(myArr[2])

for(var i = 0; i < myArr.length; i++){
    console.log(myArr[i])
}



// Two Dimension Array
var twoDimArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8 ,9]
// ]

console.log(twoDimArr[1][0]) // 4
console.log(twoDimArr[3][2]) // 9

// console.log(twoDimArr[2][0], twoDimArr[1][1])
    for(var i = 0; i < twoDimArr.length; i++){
        for(var j = 0; j < twoDimArr[i].length; j++){
            console.log(twoDimArr[i][j])
        }
    }
