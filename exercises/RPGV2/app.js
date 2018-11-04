var readline = require("readline-sync")
//////////////
var playerGame = false
var fightChoice = false
var y = true;
var run = function(){
    return Math.floor(Math.random()*2)
}

var healthPotion = {
    name: "Health Potion",
    value: 25,
}

var attackPotion = {
    name: "Attack Potion",
    attackPower: 25,
}
var endGame = {
    name: "God Status",
    value: true
}

function Enemy(){
   var name = ["Ghost", "Demon", "Dragon"]
   var item = [healthPotion.name, attackPotion.name, endGame.name];
   this.item = item[Math.floor(Math.random()* item.length)];
   this.name = name[Math.floor(Math.random()* name.length)];
   this.hitPoints = Math.floor(Math.random()* 100 + 50);
   this.attackPower = Math.floor(Math.random()* 100 + 10);
}


var player1 = {
    name: "",
    hitPoints: 1000,
    attackPower: Math.floor(Math.random()*100 + 50),
    inventory: [],
    fightsWon: 0,
}
//Opening
// console.log(`You wake up. It's early morning. Slowly your senses come to you and you become aware that you are lying down on a park bench in a picturesque park overlooking the city\n`)
// console.log(`Looking around, you notice that it is eerily quiet and no one is around. No city sounds, no birds, no insects, even the air is still, only a slight ringing in your ear punctuates the silence. "What is going on?" You ask yourself.\n`)
// console.log(`Suddenly, as if you feel a haptic pulse in your left palm and you jolt upright\n`)
// console.log(`Intuitively, you use your thumb to tap your palm, and a holographic screen appears in your vision...\n`)
// console.log(`"Greetings traveller, welcome back." prints in your display and a sense of unadultured excitement begins to creep in. You know this feeling, you let it happen. Something feels familiar here.\n`)

// //Greeting
// console.log(`The holoscreen prompts you: \n`)

player1.name = readline.question(`Do you remember your name? What do you call yourself? `)
console.log(`\nExcellent, ${player1.name}, let's begin.\n`)


while(playerGame === false){
    var choice = readline.keyIn(`We've got a long way to walk, press "w" to get started walking, press "i" to check your inventory, or "q" to quit. `, {limit: ['w','q', 'i']})
        if(choice === "w"){
            var enemy = new Enemy();
            console.log(enemy)
            console.log(`You ran into a ${enemy.name}!`)
            combatChoice = readline.keyIn(`What do you want to do? Press "a" to attack. Press "r" to run.`, {limit: ['a','r']})
            if(combatChoice === 'a'){
                fightChoice = true;
                while(enemy.hitPoints > 0 && player1.hitPoints > 0){  
                    enemy.hitPoints -= player1.attackPower;
                    console.log(`You hit the ${enemy.name}, for ${player1.attackPower} damage and their health is now ${enemy.hitPoints}`)
                    player1.hitPoints -= enemy.attackPower;
                    console.log(`The ${enemy.name} hit you for ${enemy.attackPower} damage and your health is now ${player1.hitPoints}`)
                }
                if(player1.hitPoints <= 0){
                    console.log(`You suck ${player1.name}, you're dead.`)
                    playerGame = true;
                    break;
                }else{
                    console.log(`You killed the ${enemy.name}, and you now have a ${enemy.item} in your inventory.`)
                    player1.inventory.push(enemy.item)
                    player1.fightsWon += 1
                    console.log(`Fights won: ${player1.fightsWon}`)
                }
                if(player1.fightsWon === 5){
                    console.log(`You won!`)
                    playerGame = true;
                    //can add part 2 return new function for part 2
                }
            }else{
                fightChoice = false;
                if(run() === 1){
                    console.log(`You got away.`)
                    combatChoice = true;
                }else{
                    player1.hitPoints -= enemy.attackPower;
                    console.log(`You weren't able to get away. The ${enemy.name} gets an attack in for ${enemy.attackPower} damage and your Health is ${player1.hitPoints} now.`)
                    combatChoice = true;

                    while(player1.hitPoints > 0 && enemy.hitPoints < 0){
                        enemy.hitPoints -= player1.attackPower;
                        console.log(`You hit the ${enemy.name}, for ${player1.attackPower} damage and their health is now ${enemy.hitPoints}`)
                        player1.hitPoints -= enemy.attackPower;
                        console.log(`The ${enemy.name} hit you for ${enemy.attackPower} damage and your health is now ${player1.hitPoints}`)
                    }
                    if(player1.hitPoints <= 0){
                        console.log(`You suck ${player1.name}, you're dead.`)
                        break;
                    }else{
                        console.log(`You killed the ${enemy.name}, and you now have a ${enemy.item} in your inventory.`)
                        player1.inventory.push(enemy.item)
                        player1.fightsWon += 1
                        console.log(`Fights won: ${player1.fightsWon}`)
                    }
                }

            }
        }else if(choice === "i"){
            console.log(`Your Name is: ${player1.name}\n Your Health is: ${player1.hitPoints}\n Your Attack Power is: ${player1.attackPower}\n Your inventory includes: ${player1.inventory}\n`)
            var pickItem = readline.keyInYN(`Would you like to use an item? "y" or "n"`)
            if(pickItem === y){
                if(player1.inventory.length === 0){
                    pickItem = false;
                    console.log(`You don't have anything in your inventory.`)
                }else{
                pickItem = true;
                console.log(`Here is your list of items: ${player1.inventory}`)
                var usedItem = readline.keyInSelect(player1.inventory)
                }
            }else{
                pickItem = false;
            }
            if (player1.inventory[usedItem] === "Health Potion"){
                player1.hitPoints += healthPotion.value
                player1.inventory.splice(player1.inventory.indexOf(usedItem))
                console.log(`You used a Health Potion and your health is now: ${player1.hitPoints}`)

            }else if (player1.inventory[usedItem] === "God Status"){
                console.log(`You found the secret, you're God and you end the game.`)
                playerGame = endGame.value;

            }else if (player1.inventory[usedItem] === "Attack Potion"){
                player1.attackPower += attackPotion.attackPower
                player1.inventory.splice(player1.inventory.indexOf(usedItem))
                console.log(`You used an Attack Potion and your Attack Power is now: ${player1.attackPower}`)
            }
        } else if(choice === "q"){
            console.log(`You're a quitter ${player1.name}`)
            playerGame = endGame.value;
        }
}
