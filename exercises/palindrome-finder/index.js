// isPalindrome("Star Rats!");  // true
// isPalindrome("palindrome");  // false
// isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");  // true

// function isPalindrome(str){
//     var normalized = str.toLowerCase()
//     var reversed = normalized.split('').reverse().join('')
//     if (normalized === reversed){
//         console.log("Yeah, that's a palindrome")
//     }else{
//         console.log("Not a palindrome")
//     }
// }

// isPalindrome("Star Rats!")

// function isPalindrome(str){
//     var normalized = str.match(/[^_\W]+/g).join('').toLowerCase()
//     console.log(normalized)
//     var reversed = str.match(/[^_\W]+/g).reverse().join('').toLowerCase()
//     console.log(reversed)
//     if(normalized === reversed){
//         console.log("Yup, that's a palindrome")
//     }else{
//         console.log("Nah, not a palindrome")
//     }
// }

// isPalindrome("Star Rats!")


function isPalindrome(str){
        var normalized = str.match(/[a-z]/gi).join('').toLowerCase()
        console.log(normalized)
        var reversed = normalized.split('').reverse().join('')
        console.log(reversed)
        if(normalized === reversed){
            console.log("Yup, that's a palindrome")
        }else{
            console.log("Nah, not a palindrome")
        }
    }
    
    isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!")
    