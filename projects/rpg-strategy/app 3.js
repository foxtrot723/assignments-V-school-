var ask = require("readline-sync")
var gameFunctions = require("./functions.js")
// console.log(gameFunctions)
            var enemyName = function() {
                const enemyArr = ["pirates", "police", "aliens", "cannibals"]
                let theirName = Math.ceil(Math.random() * 4)
                if (theirName === 1) {
                    return "pirates"
                } else if (theirName === 2) {
                    return "police"
                } else if (theirName === 3) {
                    return "aliens"
                } else {
                    return "cannibals"
                }
            }
var player = {
    name: "",
    health:1000,
    ammunition:10,
    fuel:600,
    evade: function() {
        var chanceOfEvade = Math.floor(Math.random() * 100)
        if (chanceOfEvade >= 50) {
            console.log("You successfully evaded your enemy, keep your hopes up and your head down.")
            console.log(userName)
        } else {
            //console.clear() cannot be used with node but must have a DOM object, it will break here.
            // console.clear()
            console.log("You're gonna have to fight this one out " + this.name + ", I will be crying in the lavoratories if you need me." + "\n\n")
            return this.battle()
        }
    },
    fly: function() {
        let chanceOfFight = Math.ceil(Math.random() * 4)
        if (chanceOfFight === 1) {
            // What are the options? also you are not finishing the keyInSelect here, you need to save the index to a variable and then return it or something so that it knows what should happen. this is currently returning Undefined to line 430.
            var noEnemiesSpotted = ask.keyInSelect(options, "No enemies spotted, What next captain?")
            return noEnemiesSpotted
        } else {
            //console.clear() cannot be used with node but must have a DOM object, it will break here. 
            // console.clear()

            //The use of enemyName() is calling that function. This randomly selects an enemy. You should save enemyName() to a variable at this point so that it will maintain the same enemy throughout the battle.  
            // var myEnemy = enemyName();
            // console.log("The " + myEnemy + " are approaching, good luck son...")
            var myEnemy = enemyName() 
            console.log("The " + myEnemy + " are approaching, good luck son...")
            var fightOrRun = ask.keyInYN("Are you prepared for battle?")
            if (fightOrRun === true) {
                console.log("Man your posts boys!")
                return this.battle()
                // nothing is returned here, since you are doing a console log of the function on line 430 it will print Undefined to the console. 
            } else {
                return this.evade()
            }
        }
    },
    plunder: function() {
        const chanceOfLoot = Math.floor(Math.random() * 100)
        if (chanceOfLoot <= 5) {
            var fuelChance = Math.ceil(Math.random() * (500 - 300) + 300)
            this.fuel += fuelChance
            console.log("Nice loot! We are 300 fuel closer to getting out of here!")
            console.log("Health: " + this.health)
            console.log("Ammunition: " + this.ammunition)
            console.log("Fuel: " + this.fuel)
        } else if (chanceOfLoot <= 40) {
            var healthChance = Math.ceil(Math.random() * (500 - 150) + 150)
            this.health += healthChance
            console.log("Okay, we got 500 health for our time, good haul!")
            console.log("Health: " + this.health)
            console.log("Ammunition: " + this.ammunition)
            console.log("Fuel: " + this.fuel)
        } else if (chanceOfLoot <= 95) {
            var ammoChance = Math.ceil(Math.random() * (10 - 3) + 3)
            this.ammunition += ammoChance
            console.log("We have 5 more ammo, kinda sucks but better than nothing!")
            console.log("Health: " + this.health)
            console.log("Ammunition: " + this.ammunition)
            console.log("Fuel: " + this.fuel)
        } else {
            const names = ["Johnny", "George", "Smith", "Bob", "Alejandro"]
            var randName = function cycleNames() {
                let crewName = Math.floor(Math.random() * (5 - 0))
                return names[crewName]
            }
            console.log("We were ambushed and we lost " + randName())
        }
    },
    battle: function() {
        const fightOptions = [bigBomb.name + ": 5 ammo", mediumBomb.name + ": 3 ammo",littleBomb.name + ": 1 ammo"]
        var bombChoices = ask.keyInSelect(fightOptions, "How would you like to attack?")
        var dodgeChance = Math.floor(Math.random() * 100)
        if (myEnemy === "pirates") {
            while(pirates.health > 0 && this.health > 0) {
                if (bombChoices === fightOptions[1]) {
                    if (dodgeChance < 15) {
                        console.log(pirates.name + " unfortunately avoided the attack")
                        console.log("The pirates hurt you for " + pirates.attack() + " damage")
                        console.log(this.health -= pirates.attack() + " damage was taken to our engines!")

                        
                    } else {
                        console.log("You hit " + pirates.name + " for " + bigBomb.attack() + " damage")
                        pirates.health -= bigBomb.attack()
                        console.log("The " + pirates.name + " have " + pirates.health + " health.")
                        console.log("The pirates hurt you for " + pirates.attack() + " damage")
                        console.log(this.health -= pirates.attack() + " damage was taken to our engines!")


                    }
                } else if (bombChoices === fightOptions[2]) {
                    if (dodgeChance < 15) {
                        console.log(pirates.name + " unfortunately avoided the attack")
                        console.log("The pirates hurt you for " + pirates.attack() + " damage")
                        console.log(this.health -= pirates.attack() + " damage was taken to our engines!")

                        return bombChoices

                    } else {
                        console.log("You hit " + pirates.name + " for " + mediumBomb.attack() + " damage")
                        pirates.health -= mediumBomb.attack()
                        console.log("The " + pirates.name + " have " + pirates.health + " health.")
                        console.log("The pirates hurt you for " + pirates.attack() + " damage")
                        console.log(this.health -= pirates.attack() + " damage was taken to our engines!")

                        return bombChoices

                    }
                } else {
                    if (dodgeChance < 15) {
                        console.log(pirates.name + " unfortunately avoided the attack")
                        console.log("The pirates hurt you for " + pirates.attack() + " damage")
                        console.log(this.health -= pirates.attack() + " damage was taken to our engines!")

                        return bombChoices


                    } else {
                        console.log("You hit " + pirates.name + " for " + littleBomb.attack() + " damage")
                        pirates.health -= littleBomb.attack()
                        console.log("The " + pirates.name + " have " + pirates.health + " health.")
                        console.log("The pirates hurt you for " + pirates.attack() + " damage")
                        console.log(this.health -= pirates.attack() + " damage was taken to our engines!")

                        return bombChoices


                    }
                } 
            }
        } else if (myEnemy === "police") {
            while (police.health > 0) {
                if (bombChoices === fightOptions[1]) {
                    if (dodgeChance < 15) {
                        console.log(police.name + " unfortunately avoided the attack")
                        console.log("The police hurt you for " + police.attack() + " damage")
                        console.log(this.health -= police.attack() + " damage was taken to our engines!")

                        return bombChoices


                    } else {
                        console.log("You hit " + police.name + " for " + bigBomb.attack() + " damage")
                        police.health -= bigBomb.attack()
                        console.log("The " + police.name + " have " + police.health + " health.")
                        console.log("The police hurt you for " + police.attack() + " damage")
                        console.log(this.health -= police.attack() + " damage was taken to our engines!")

                        return bombChoices


                    }
                } else if (bombChoices === fightOptions[2]) {
                    if (dodgeChance < 15) {
                        console.log(police.name + " unfortunately avoided the attack")
                        console.log("The police hurt you for " + police.attack() + " damage")
                        console.log(this.health -= police.attack() + " damage was taken to our engines!")

                        return bombChoices


                    } else {
                        console.log("You hit " + police.name + " for " + mediumBomb.attack() + " damage")
                        police.health -= mediumBomb.attack()
                        console.log("The " + police.name + " have " + police.health + " health.")
                        console.log("The police hurt you for " + police.attack() + " damage")
                        console.log(this.health -= police.attack() + " damage was taken to our engines!")

                        return bombChoices


                    }
                } else {
                    if (dodgeChance < 15) {
                        console.log(police.name + " unfortunately avoided the attack")
                        console.log("The police hurt you for " + police.attack() + " damage")
                        console.log(this.health -= police.attack() + " damage was taken to our engines!")

                        return bombChoices


                    } else {
                        console.log("You hit " + police.name + " for " + littleBomb.attack() + " damage")
                        police.health -= littleBomb.attack()
                        console.log("The " + police.name + " have " + police.health + " health.")
                        console.log("The police hurt you for " + police.attack() + " damage")
                        console.log(this.health -= police.attack() + " damage was taken to our engines!")

                        return bombChoices


                    }
                } 
            }
        } else if (myEnemy === "aliens") {
            while (aliens.health > 0) {
                if (bombChoices === fightOptions[1]) {
                    if (dodgeChance < 15) {
                        console.log(aliens.name + " unfortunately avoided the attack")
                        console.log("The aliens hurt you for " + aliens.attack() + " damage")
                        console.log(this.health -= aliens.attack() + " damage was taken to our engines!")

                        return bombChoices


                    } else {
                        console.log("You hit " + aliens.name + " for " + bigBomb.attack() + " damage")
                        aliens.health -= bigBomb.attack()
                        console.log("The " + aliens.name + " have " + aliens.health + " health.")
                        console.log("The aliens hurt you for " + aliens.attack() + " damage")
                        console.log(this.health -= aliens.attack() + " damage was taken to our engines!")

                        return bombChoices


                    }
                } else if (bombChoices === fightOptions[2]) {
                    if (dodgeChance < 15) {
                        console.log(aliens.name + " unfortunately avoided the attack")
                        console.log("The aliens hurt you for " + aliens.attack() + " damage")
                        console.log(this.health -= aliens.attack() + " damage was taken to our engines!")

                        return bombChoices


                    } else {
                        console.log("You hit " + aliens.name + " for " + mediumBomb.attack() + " damage")
                        aliens.health -= mediumBomb.attack()
                        console.log("The " + aliens.name + " have " + aliens.health + " health.")
                        console.log("The aliens hurt you for " + aliens.attack() + " damage")
                        console.log(this.health -= aliens.attack() + " damage was taken to our engines!")

                        return bombChoices


                    }
                } else {
                    if (dodgeChance < 15) {
                        console.log(aliens.name + " unfortunately avoided the attack")
                        console.log("The aliens hurt you for " + aliens.attack() + " damage")
                        console.log(this.health -= aliens.attack() + " damage was taken to our engines!")

                        return bombChoices


                    } else {
                        console.log("You hit " + aliens.name + " for " + littleBomb.attack() + " damage")
                        aliens.health -= littleBomb.attack()
                        console.log("The " + aliens.name + " have " + aliens.health + " health.")
                        console.log("The aliens hurt you for " + aliens.attack() + " damage")
                        console.log(this.health -= aliens.attack() + " damage was taken to our engines!")

                        return bombChoices

                    }
                } 
            }
        } else {
            while (cannibals.health > 0) {
                if (bombChoices === fightOptions[1]) {
                    if (dodgeChance < 15) {
                        console.log(cannibals.name + " unfortunately avoided the attack")
                        console.log("The cannibals hurt you for " + cannibals.attack() + " damage")
                        console.log(this.health -= cannibals.attack() + " damage was taken to our engines!")

                        return bombChoices

                    } else {
                        console.log("You hit " + cannibals.name + " for " + bigBomb.attack() + " damage")
                        cannibals.health -= bigBomb.attack()
                        console.log("The " + cannibals.name + " have " + cannibals.health + " health.")
                        console.log("The cannibals hurt you for " + cannibals.attack() + " damage")
                        //currently this is just printing a number, You will want to specify in the console what this number is, It appears to be the players health so you could say "your health is now ..." 
                        console.log(this.health -= cannibals.attack() + " damage was taken to our engines!")
                        //you also just console logged this, so by putting it once again below it is subtracting that from your health two times. 

                        return bombChoices

                    }
                } else if (bombChoices === fightOptions[2]) {
                    if (dodgeChance < 15) {
                        console.log(cannibals.name + " unfortunately avoided the attack")
                        console.log("The cannibals hurt you for " + cannibals.attack() + " damage")
                        console.log((this.health -= cannibals.attack()) + " damage was taken to our engines!")

                        return bombChoices


                    } else {
                        console.log("You hit " + cannibals.name + " for " + mediumBomb.attack() + " damage")
                        cannibals.health -= mediumBomb.attack()
                        console.log("The " + cannibals.name + " have " + cannibals.health + " health.")
                        console.log("The cannibals hurt you for " + cannibals.attack() + " damage")
                        console.log((this.health -= cannibals.attack()) + " damage was taken to our engines!")

                        return bombChoices

                    }
                } else {
                    if (dodgeChance < 15) {
                        console.log(cannibals.name + " unfortunately avoided the attack")
                        console.log("The cannibals hurt you for " + cannibals.attack() + " damage")
                        console.log((this.health -= cannibals.attack()) + " damage was taken to our engines!")

                        return bombChoices

                    } else {
                        console.log("You hit " + cannibals.name + " for " + littleBomb.attack() + " damage")
                        cannibals.health -= littleBomb.attack()
                        console.log("The " + cannibals.name + " have " + cannibals.health + " health.")
                        console.log("The cannibals hurt you for " + cannibals.attack() + " damage")
                        console.log((this.health -= cannibals.attack()) + " damage was taken to our engines!")

                        return bombChoices

                    }
                }
            } 
        }
    }
}

var pirates = {
    name: "Space Pirates",
    health:700,
    ammunition:40,
    fuel:1000,
    attack: function() {
        return Math.floor(Math.random() * (200 - 150) + 150)
    }
}

var police = {
    name: "Space Police",
    health:800,
    ammunition:30,
    fuel:600,
    attack: function() {
        return Math.floor(Math.random() * (200 - 100) + 100)
    }
}

var aliens = {
    name: "Space Aliens", 
    health:500,
    ammunition:20,
    fuel:500,
    attack: function() {
        return Math.floor(Math.random() * (275 - 200) + 200)
    }
}

var cannibals = {
    name: "Space Cannibals",
    health:1200,
    ammunition:50,
    fuel:400,
    attack: function() {
        return Math.floor((Math.random() * (150 - 100)) + 100)
    }
}

var bigBomb = {
    name: "Big Bomb",
    attack: function() {
        return Math.floor(Math.random() * (700 - 550) + 550)
    }
}

var mediumBomb = {
    name: "Medium Bomb",
    attack: function() {
        return Math.floor(Math.random() * (540 - 400) + 200)
    }
}

var littleBomb = {
    name: "Little Bomb",
    attack: function() {
        return Math.floor(Math.random() * (390 - 300) + 300)
    }
}

const options = ["fly", "plunder", "check inventory", "exit"]

let map = [">","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","O"]

//I would use a console log here, or at least indicate in some way that they need to press a key for it to continue. 
console.log(ask.keyIn("A short time ago, in a place not too far away, the greatest space chase the galaxy has ever seen took place. This is the story...", {hideEchoBack: true}))

// console.log("\n\n" + mapBar)

//console.clear() cannot be used with node but must have a DOM object, it will break here. 
// console.clear()

player.name = ask.question("\n\n\n\n" + "Good morning captain, we are now entering undiscovered territory that has not been registered into our systems, the central sun has a very strong gravitational pull. We will require at least 3000 fuel to escape this hell hole. What is your name sir? ")

//I would use a console log here, or at least indicate in some way that they need to press a key for it to continue. 
console.log(ask.keyIn("Alright captain " + player.name + ", I am at your service. I will be on guard, who knows what is waiting for us out there...", {hideEchoBack: true}))

//if your player.health is less than 0, the game successfully ends
//if map.length is less than 2, the game successfully ends
//The player.ammunition is not being used at any point in the game. So that will not end the game as the code is currently written. 
//The player.fuel is not being used at any point in the game. So that will also not end the game as the code is currently written.

while (player.health > 0 && map.length > 2 && player.ammunition > 0 && player.fuel > 0) {
    var userName = ask.keyInSelect(options,"What would you like to do?")
    if(options[userName] === "fly") {
        //console.clear() cannot be used with node but must have a DOM object, it will break here. 
        // console.clear()
        console.log(player.fly())
        map.splice(1, 1)
        mapBar = map.join("")
        console.log(mapBar)
    } else if (options[userName] === "plunder") {
        //console.clear() cannot be used with node but must have a DOM object, it will break here. 
        // console.clear()
        console.log(player.plunder())
        map.splice(1, 1)
        mapBar = map.join("")
        console.log(mapBar)
    } else if (options[userName] === "check inventory") {
        //console.clear() cannot be used with node but must have a DOM object, it will break here. 
        // console.clear()
        console.log("Health: " + player.health)
        console.log("Ammunition: " + player.ammunition)
        console.log("Fuel: " + player.fuel)
    } else {
        player.health = 0
        //console.clear() cannot be used with node but must have a DOM object, it will break here. 
        // console.clear()
        console.log("You have failed us, better luck next time...")
    }
}




















// function walk() {
//     console.log("hey im walking")
// }

// function attack() {
//     while(){

//     }
// }


