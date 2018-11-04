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
   this.hitPoints = Math.floor(Math.random()* 250 + 50);
   this.attackPower = Math.floor(Math.random()* 10 + 30);
}


var player1 = {
    name: "",
    hitPoints: 500,
    attackPower: Math.floor(Math.random()*100 + 50),
    inventory: [],
    fightsWon: 0,
}

player1.name = readline.question(`Do you remember your name? What do you call yourself? `)
console.log(`\nExcellent, ${player1.name}, let's begin.\n`)


while(playerGame === false){
    var choice = readline.keyIn(`We've got a long way to walk, press "w" to get started walking, press "i" to check your inventory, or "q" to quit. `, {limit: ['w','q', 'i']})
        if(choice === "w"){
            var enemy = new Enemy();
            console.log(`You ran into a ${enemy.name}!`)
            combatChoice = readline.keyIn(`What do you want to do? Press "a" to attack. Press "r" to run.`, {limit: ['a','r']})
            if(combatChoice === 'a'){
                fightChoice = true
                console.log(`Beat that mofo up!`)
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
                if(player1.fightsWon >=5){
                    playerGame = true;
                    console.log(`You won!`)
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
                        player1.hitPoints -= enemy.attackPower;
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
            console.log(player1)
            var pickItem = readline.keyInYN(`Would you like to use an item? "y" or "n"`)
            if(pickItem === y){
                pickItem = true;
                console.log(`Here is your list of items: ${player1.inventory}`)
                var usedItem = readline.keyInSelect(player1.inventory)
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
