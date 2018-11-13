// Write a for loop that plays the FizzBuzz game. Your output should count 1 to 100 and replace everything divisible by 3 with "fizz", 
// everything divisible by 5 with "Buzz", and everything divisible by both 3 and 5 with "FizzBuzz"

function fizzBuzz(){
    for(i=1; i <=100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }else if (i % 3 === 0){
            console.log("Fizz");
        }else if (i % 5 === 0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}
fizzBuzz();
////////
const fizzBuzz = () => {

}
