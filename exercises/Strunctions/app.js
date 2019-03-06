//COmbine using at least 3 unique functions
// .concat()---1
// .indexOf()---2
// .lastIndexOf()--3
// .match()
// .replace()--4
// .slice()---2
// .split()--4
// .toLowerCase()---1
// .toUpperCase()---1
// .substr()---3

//1
var word1 = 'SuPeR'
var word2 = 'man'
var result = word1.toLowerCase().concat(word2.toUpperCase())

console.log(result)

//2
var string1 = 'this is a string'
function cutString(){
    return string1.slice(string1.indexOf('string'))
}
console.log(cutString())

//3
var string2 = 'the quick brown fox lazily jumped over the fence and then the fox grabbed a beer with his buddies'
function function2(){
    return string2.substr(0, string2.lastIndexOf('the'))
}
console.log(function2())

//4
var string3 = 'this is a string'
function function3(){
    var replacement = 'banana'
    return string3.replace('string', replacement).split(' ')
}
console.log(function3())

//5
var string4 = 'this is a stringy string stringing along like string cheese on a holiday fling'
function function4(){
    var pattern = /ing/g;
    return string4.match(pattern)
}
console.log(function4())

//6
function matchSwitch (str){
    var newStr = str.replace(/the/g, 'and')
    console.log(newStr)
    var andCount = newStr.match(/and/g)
    console.log(andCount)
}

matchSwitch('the bird the cow the fox')
