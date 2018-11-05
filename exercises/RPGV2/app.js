var readline = require("readline-sync")
var sound = require("play-sound")(opts = {})

var backgroundSound;
function backgroundMusic(){
    backgroundSound = sound.play("./Chrome Sparks Goddess (mp3cut.net).mp3", function(err){
        if(err && !err.killed) throw err
    });
}


//////////////
var playerGame = false
var fightChoice = false
var y = true;
var enemyIsDead = false
var run = function(){
    return Math.floor(Math.random()*2)
}

var enemyChance = function(){
    return Math.floor(Math.random()* 4)
}

var healthInjector = {
    name: "Health Injector",
    value: 25,
}

var powerGloves = {
    name: "Power Gloves",
    attackPower: 25,
}
var endGame = {
    name: "Multi-Dimensional Portal Gun",
    value: true
}
var beamRifle = {
    name: "Beam Rifle",
    attackPower: 50
}

function Enemy(){
   var name = ["Humanoid Robot", "Sentinel Robot", "Battle Robot", "Mech Robot", "Stealth Robot"]
   var item = [healthInjector.name, powerGloves.name, endGame.name];
   this.item = item[Math.floor(Math.random()* item.length)];
   this.name = name[Math.floor(Math.random()* name.length)];
   this.hitPoints = Math.floor(Math.random()* 100 + 50);
   this.attackPower = Math.floor(Math.random()* 100 + 10);
}


var player1 = {
    name: "",
    hitPoints: 300,
    attackPower: Math.floor(Math.random()*100 + 50),
    inventory: [],
    fightsWon: 0,
}
backgroundMusic()
//Opening
console.log(`You wake up. It's early morning. Slowly your senses come to you and you become aware that you are lying down on a park bench in a picturesque park overlooking the city\n`)
console.log(`Looking around, you notice that it is eerily quiet and no one is around. No city sounds, no birds, no insects, even the air is still, only a slight ringing in your ear punctuates the silence. "What is going on?" You ask yourself.\n`)
console.log(`Suddenly, as if you feel a haptic pulse in your left palm and you jolt upright\n`)
console.log(`Intuitively, you use your thumb to tap your palm, and a holographic screen appears in your vision...\n`)
console.log(`"Greetings traveller, welcome back." prints in your display screen and a passing moment of insight hits your consciousness. Something feels familiar here. You've been here before\n`)

//Greeting
console.log(`The holoscreen prompts you: \n`)

player1.name = readline.question(`"Do you remember your name? What do you call yourself?" `)
console.log(`\n"Excellent, ${player1.name}, you know where to go, let's begin. Danger is ahead, but you will be assisted." \n`)
console.log(`\nYou exit the gates and begin heading towards the city center. As you walk, you feel it's draw, pulling you. `)

while(playerGame === false){
    var choice = readline.keyIn(`"We've got a long way to walk, press "w" to get started walking, press "i" to check your inventory, or "q" to quit." `, {limit: ['w','q', 'i']})
        if(choice === "w"){
            if(enemyChance() === 1){
                var enemy = new Enemy();
                console.log(enemy)
                console.log(`A ${enemy.name} appears out of the folds of space-time and begins rushing towards you.\n`)
                combatChoice = readline.keyIn(`What do you want to do? Press "a" to attack. Press "r" to run. `, {limit: ['a','r']})
                if(combatChoice === 'a'){
                    fightChoice = true;
                    while(enemy.hitPoints > 0 && player1.hitPoints > 0){
                        enemy.hitPoints -= player1.attackPower;
                        console.log(`You attack the ${enemy.name}, for ${player1.attackPower} damage and their health is now ${enemy.hitPoints}`)
                        if(enemy.hitPoints <= 0){      
                            // console.log(`You killed the ${enemy.name}`)
                        }else{
                        player1.hitPoints -= enemy.attackPower;
                        console.log(`The ${enemy.name} attacked you for ${enemy.attackPower} damage and your health is now ${player1.hitPoints}`)
                        var midAttackChoice = readline.keyIn(`Press "a" to keep fighting, press "i" to check your inventory, press "r" to run\n`, {limit: ['a','i','r']})
                        //Mid-Fight Prompts
                        if (midAttackChoice === 'a'){
                            enemy.hitPoints -= player1.attackPower;
                            console.log(`You attack the ${enemy.name}, for ${player1.attackPower} damage and their health is now ${enemy.hitPoints}`)
                            if(enemy.hitPoints <= 0){      
                                console.log(`You deftly terminate the ${enemy.name}`)
                            }else{
                            player1.hitPoints -= enemy.attackPower;
                            console.log(`The ${enemy.name} attacked you for ${enemy.attackPower} damage and your health is now ${player1.hitPoints}`)
                            }
                        }else if(midAttackChoice === 'i'){
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
                            if (player1.inventory[usedItem] === "Health Injector"){
                                player1.hitPoints += healthInjector.value
                                player1.inventory.splice(player1.inventory.indexOf(usedItem))
                                console.log(`You used a Health Injector and your health is now: ${player1.hitPoints}`)

                            }else if (player1.inventory[usedItem] === "Multi-dimensional Portal Gun"){
                                console.log(`You found the secret item and use it to Teleport out of the game. Cheater.`)
                                playerGame = endGame.value;

                            }else if (player1.inventory[usedItem] === "Power Gloves"){
                                player1.attackPower += powerGloves.attackPower
                                player1.inventory.splice(player1.inventory.indexOf(usedItem))
                                console.log(`You equipped the Power Gloves and your Attack Power is now: ${player1.attackPower}`)
                            }
                        }else{
                            fightChoice = false;
                            if(run() === 1){
                                console.log(`You got away.`)
                                combatChoice = true;
                            }else{
                                player1.hitPoints -= enemy.attackPower;
                                console.log(`You weren't able to get away. The ${enemy.name} gets an attack in for ${enemy.attackPower} damage and your Health is now ${player1.hitPoints} now.`)
                                combatChoice = true;

                                while(player1.hitPoints > 0 && enemy.hitPoints > 0){
                                    enemy.hitPoints -= player1.attackPower;
                                    console.log(`You attack the ${enemy.name}, for ${player1.attackPower} damage and their health is now ${enemy.hitPoints}`)
                                    player1.hitPoints -= enemy.attackPower;
                                    console.log(`The ${enemy.name} attacked you for ${enemy.attackPower} damage and your health is now ${player1.hitPoints}`)
                                }
                                if(player1.hitPoints <= 0){
                                    console.log(`You suck ${player1.name}, you're dead.`)
                                    break;
                                }else{
                                    console.log(`You deftly terminated the ${enemy.name}, and you now have a ${enemy.item} in your inventory.`)
                                    player1.inventory.push(enemy.item)
                                    player1.fightsWon += 1
                                    console.log(`Fights won: ${player1.fightsWon}`)
                                }
                            }
                        }
                    }
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

                        while(player1.hitPoints > 0 && enemy.hitPoints > 0){
                            enemy.hitPoints -= player1.attackPower;
                            console.log(`You attack the ${enemy.name}, for ${player1.attackPower} damage and their health is now ${enemy.hitPoints}`)
                            player1.hitPoints -= enemy.attackPower;
                            console.log(`The ${enemy.name} attacks you for ${enemy.attackPower} damage and your health is now ${player1.hitPoints}`)
                        }
                        if(player1.hitPoints <= 0){
                            console.log(`You suck ${player1.name}, you're dead.`)
                            break;
                        }else{
                            console.log(`You deftly terminated the ${enemy.name}, and you now have a ${enemy.item} in your inventory.`)
                            player1.inventory.push(enemy.item)
                            player1.fightsWon += 1
                            console.log(`Fights won: ${player1.fightsWon}`)
                        }
                    }
                }
                /// End of first choice
            }else{
                console.log(`You walk safely, but sense something lurking in the folds of space-time...\n`)
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
                if (player1.inventory[usedItem] === "Health Injector"){
                    player1.hitPoints += healthInjector.value
                    player1.inventory.splice(player1.inventory.indexOf(usedItem))
                    console.log(`You used a Health Injector and your health is now: ${player1.hitPoints}`)

                }else if (player1.inventory[usedItem] === "Multi-Dimensional Portal Gun "){
                    console.log(`You found the secret item and use it to Teleport out of the game. Cheater.`)
                    playerGame = endGame.value;

                }else if (player1.inventory[usedItem] === "Power Gloves"){
                    player1.attackPower += powerGloves.attackPower
                    player1.inventory.splice(player1.inventory.indexOf(usedItem))
                    console.log(`You equipped the Attack Gloves and your Attack Power is now: ${player1.attackPower}`)

                }else if (player1.inventory[usedItem] === "Beam Rifle"){
                    player1.attackPower += beamRifle.attackPower
                    player1.inventory.splice(player1.inventory.indexOf(usedItem))
                    console.log(`You equipped a Beam Rifle and your Attack Power is now: ${player1.attackPower}`)
            }else if(choice === "q"){
                console.log(`You're a quitter ${player1.name}`)
                playerGame = endGame.value;
            }
}
if(backgroundSound){
    backgroundSound.kill()
}