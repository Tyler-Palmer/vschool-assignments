//33 - 122 Unicode

var arr = []
var randomValue = function(){
    return Math.floor(Math.random()*100)
}
function randomCharacter(){
    if(randomValue() >=33){
        return 
    }
//    str.fromCharCode(randomValue)
}
function randomPasswordGenerator(number){
    for (i=0; i < number; i++){
        arr.push(number[i])
    }
arr.join('')
}
console.log(randomValue())
console.log(arr)
