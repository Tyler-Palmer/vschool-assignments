var readline = require('readline-sync')

//Get numbers

var num1 = readline.questionInt("Please enter your first number: ");
var num2 = readline.questionInt("Please enter your second number: ");

//math functions

var add = function(){
    return Number(num1 + num2);
}
var sub = function(){
    return Number(num1 - num2);
}
var mul = function(){
    return Number(num1 * num2);
}
var div = function(){
    return Number(num1 / num2);
}

//Perform operation

var operations = ['add','sub','mul','div'];
var index = readline.keyInSelect(operations, "Please enter the operation to perform: ");
function doIt(){
    if(index === 0){
        return add();
    }else if(index === 1){
        return sub();
    }else if(index === 2){
        return mul();
    }else if(index === 3){
        return div();
    }else{
        return "No calculation performed"
    }
}
console.log(`Okay, the result is: ${doIt()}`)
