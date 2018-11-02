//33 - 122 Unicode


var randomValue = function(){
    return Math.floor(Math.random()*100)
}
// }
// console.log(randomValue())
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+?" 

//    str.fromCharCode(randomValue)

function randomPasswordGenerator(number,string){
    if(typeof number != 'number'){
        return 'Your arguments need to be a number followed by a string'
    }
    var characters2 = characters.split('');
    var arr = []
    for (var i = 0; i < number - string.length; i++){
        arr.push(characters2[Math.floor(Math.random() * characters2.length)]);
    }
    return arr.join('') + string
    // if(typeof number !== 'number'){
    //     return "should be a number"
    // } 
    // console.log("hey")


}
randomPasswordGenerator(10, "ty");

module.exports = randomPasswordGenerator