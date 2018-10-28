//write a function that takes an array of numbers and returns the largest (without using Math.max())
arr = []
function myFunction1(){
    for(i=0; i<10; i++){
        arr.push(Math.floor(Math.random() * 100));
    }
    console.log(arr);
   var modArr = arr.sort(function(a, b){return a-b});
   console.log(modArr);
   console.log(modArr[modArr.length-1])  
}
myFunction1()

//write a function that takes an array of words and a character and return each word that has that letter present

function myFunction2(arr1, oneCharStr){
    
}