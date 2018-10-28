// Given a string, your task is to remove any duplicate letters. Any letters removed should be added to another string called "duplicates".

// Create function that accepts a string.
// Create variable that stores the string without duplicates.
// Create a variable that stores the letters removed.
// Have the function return the string without duplicate letters
// Create another function that returns the letters removed.

function basicStr(str){
    return str;
}
console.log(basicStr('this is a string'))
//
var duplicates = [];
  
function noDuplicateAgain(str){
    var splitStr = str.split('');
    var newObj = {};
    var newArr = [];
    for(let each of splitStr){
      newObj[each] = (newObj[each] || 0) + 1
    }console.log(newObj)
    for(let char in newObj){
      if(newObj[char] >= 1){
        newArr.push(char)
      } else{
        delete char
      }
    }
    return newArr.join('');
  }
  console.log(noDuplicateAgain('this is a string'))
  console.log(duplicates)
//
  function noDuplicate(str){
    let splitStr = str.split('');
    const output = splitStr.filter((each, index, arrItself)=> {
      return index === arrItself.indexOf(each)
    })
    return output.join('');
  }
console.log(noDuplicate('this is a string'))

// function remDup(str) {
// 	var temp = [], j = 0;
// 	var arr = str.split("");
//     arr.sort();
// }

// remDup('this is a string')
