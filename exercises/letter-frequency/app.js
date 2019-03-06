//Find the frequency of all characters in a given word or phrase. and print them to the console
//contain the characters and their counts wihtin an object
//each character will be its own key
//each value will be the character's frequency

// Const phrase = 'slimy smelly solution';

// arrayIndex = (str) => {
// // Manipulation of str to create an object
// }

// console.log(arrayIndex(phrase));

// //Output: { s: 3, l: 4, i: 2, m: 2, y: 2, ' ': 2, e: 1, o: 2, u: 1, t: 1, n: 1 }

//Hint//
// function hint() {
//     const obj = {}
//     obj["s"] = 1
//     return obj
// }

// console.log(hint());

// //Output: {s: 1}
var input = "how now brown cow";

function letterFreq(str){
    var splitStr = str.split('');
    console.log(splitStr);
    var newObj = {};
    var newArr = [];
    for(let each of splitStr){
      newObj[each] = (newObj[each] || 0) + 1
    } return newObj
}
  console.log(letterFreq(input));


// function letterFreq(str){
//     const obj = {}
//     var splitPhrase = str.split('');
//     var newStr = splitPhrase.filter(function(item){
//                 var count = item.match(/item/gi).length
//                 return(`${item}: ${count}`)
//     })
//     console.log(newStr)
// }

// letterFreq(phrase)

// function filterItOut(str){
//     var splitStr = str.split('');
//     console.log(splitStr);
//     const output = splitStr.filter(function(item){
//         return item !== "h"
//     })
//     return output.join('');
// }
// console.log(filterItOut(input));