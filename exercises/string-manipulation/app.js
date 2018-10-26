var ask = require('readline-sync');

console.log('Hello. My name is Hal. Help me get to know you.\n');
var firstName = ask.question("What is your first name? \n");
console.log(`\nGreat. Hello ${firstName.toUpperCase()}. \n`)

var age = ask.question(`I'm 4.543 billion years in the making ${firstName} How old are you? \n`)

var music = ask.question(`Wow, ${age}? You're young... What kind of music does someone your age listen to? My favorite music is Beethoven \n`)

console.log(`Well, I guess ${music} is pretty decent. \n`)
var adj = ask.question("Alright, now give me an adjective \n")
var noun = ask.question("Alright, now give me a noun \n")
var added1 = adj+noun
var added2 = Number(noun.length + adj.length)
console.log(`Ha. ${adj.concat(noun) } that's funny. Did you know our new word is ${added2} characaters long?\n`)
var story = ask.question(`Alright ${firstName} you ${added1}, tell me a short story. \n`)
var story2 = story.slice((Number(story.length)/2), Number(story.length))
console.log(`\nZzzzz... that story was boring, and it was only ${story.length} characters long. This last half of your story was '${story2}'.`)
var where = ask.question(`I'm a smart computer and can cut up that message for you. At what index do you want me to start?\n`)
var where2 = story.slice(where, story.length)
console.log(`Here ya' go: ${where2}.`)