//write a function that takes an array of numbers and returns the largest (without using Math.max())

function myFunction1(arr){
    arr = []
    for(i = 0; i < 10; i++){
        arr.push(Math.floor(Math.random() * 100));
    }
   var modArr = arr.sort(function(a, b){return a-b});
   console.log(modArr);
   console.log(modArr[modArr.length-1])  
}
myFunction1()

//write a function that takes an array of words and a character and return each word that has that letter present

function lettersWithStrings(arr, oneCharStr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i].includes(oneCharStr)){
            console.log(arr[i])
        }
    }
}

lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]

//write a function that takes a numq and num2 and returns whether num1 is divisible by num2

function isDivisible(num1, num2){
    if (num1 % num2 === 0){
        console.log("they're divisible")
    }else{
        console.log("not divisible")
    }
}

isDivisible(4, 2) // => true
isDivisible(9, 3) // => true
isDivisible(15, 4) // => false