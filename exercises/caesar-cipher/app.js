var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function caesarCipher(input, shift){
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var result = ""
    //loop
    for(var i = 0; i < input.length; i++){
    //converting
        //check the index of the current letter in the alphabet
        if(alphabet.indexOf(input[i]) !== -1){
            var index = alphabet.indexOf(input[i])
            result += alphabet[(index + shift) % 26]
        }else{
            //add character to the result
            result += input[i]
        }
            //add to result that letter shifted by the shift amount
    }
    return result
}

console.log(caesarCipher(input, shift))


//console.log yourself as you go and test

//1. Make sure you understand the question
//2. Make a plan
    //pseudocode
    //break problem down into pieces
//3. Start with the first problem , and go from there.
    //back to step 2 if it breaks
//4. Review, look back

//Thoughts:

/* 
- Use input from user
- Use shift from user to determine how many letters to shift each letter
- Take input and split('') into array
- Convert array items (that are letters) to unicode using charCodeAt()
- Use shift value and add it to the unicode value
- Convert all array items back into letters with fromCharCode()
- Use join() to recreate array with new cipher 
*/