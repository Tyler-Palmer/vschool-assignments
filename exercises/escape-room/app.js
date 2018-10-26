var readline = require('readline-sync');
var hasWon = false;
var isDead = false;
var hasKey = false;

var name = readline.question("What is your name? ");
console.log(`Alright ${name}, it is your job to escape this room.\n You have some options:\n`)
var options1 = ["Put hand in hole", "Find the key", "Open the door"];
var index = readline.keyInSelect(options1, `What do you want to do, ${name}? \n`)
while(!hasWon && !isDead){
    switch(index){
        case 0:
        console.log(`You lose ${name}, you're dead.`);
        isDead = true;
        break;

        case 1:
        var options2 = ["Put hand in hole", "Open the door"];
        var index2 = readline.keyInSelect(options2,`After careful searching the key is found, now what do you want to do ${name}?`);
        hasKey = true;
        console.log(hasKey);
        break;

        case 2:
        if(hasKey === true){
            console.log(`Cool, you know how to use a key to open a door. You win ${name}. You get to leave the room.`);
            hasWon = true;
            break;
        }else{
            var options3 = ["Put hand in hole", "Find the Key"];
            var index3 = readline.keyInSelect(options3,`Come on, ${name}, you need a key to open that door. Go find it...`);
            break;
        }
    }
    switch(index2){
        case 0:
        console.log(`You lose ${name}, you're dead.`)
        isDead = true;
        break;

        case 1:
        console.log(`Cool, you know how to use a key to open a door. You win ${name}. You get to leave the room`);
        hasWon = true;
        break;
    }
    switch(index3){
        case 0:
        console.log(`You lose ${name}, you're dead.`)
        isDead = true;
        break;

        case 1:
        var options4 = ["Put hand in hole", "Open the door"];
        var index4 = readline.keyInSelect(options4,`After careful searching the key is found, now what do you want to do ${name}?`);
        hasKey = true;
        console.log(hasKey);
    }
    switch(index4){
        case 0:
        console.log(`You lose ${name}, you're dead.`)
        isDead = true;
        break;

        case 1:
        console.log(`Cool, you know how to use a key to open a door. You win ${name}. You get to leave the room`);
        hasWon = true;
        break;
    }
}