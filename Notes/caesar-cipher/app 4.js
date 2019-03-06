var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));


function ceaserCipher(input, shift){    
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var result = ""
    // Loop
    for(var i = 0; i < input.length; i++){
        // converting
            // check the index of the current letter in the alphabet
        if(alphabet.indexOf(input[i]) !== -1){
            var index = alphabet.indexOf(input[i])
            result += alphabet[(index + shift ) % 26]
        } else {
            // add character to the result
            result += input[i]
        }
    }
    return result
}


console.log(ceaserCipher(input, shift))

// 1. Make sure you understand the question
// 2. Make a plan
    // Pseudocode
    // Break problem down into pieces
// 3. Start with the first problem, and go from there.
    // Back to step 1 if it breaks
// 4. Revsiew, look back, refactor

