var ask = require("readline-sync")
var gameFunctions = require("./functions.js")
// console.log(gameFunctions)



const names = ["Johnny", "George", "Smith", "Bob", "Alejandro"]
const choicesList  = ["fly", "plunder", "check inventory", "exit"]
const map = [">","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","O"]

///////////////////// FUNCTION FOR SHRINKIG MAP AFTER EACH MOVE //////////////////////////

const minusMap = () => {
    map.splice(1, 1)
    mapBar = map.join("")
    console.log(mapBar)
}

 //////////////// CHARACTER CONSTRUCTOR FUNCTION /////////////////

function Character(name, health, ammunition, fuel) {
    this.name = name;
    this.health = health;
    this.ammunition = ammunition;
    this.fuel = fuel;
}

/////////////////////// ENEMIES ////////////////////////

const pirates = new Character("Space Pirates", 700, 40, 1000)
pirates.attack = () => {
    Math.floor(Math.random() * (200 - 150) + 150)
}

const police = new Character("Space Police", 800, 30, 600)
police.attack = () => {
    Math.floor(Math.random() * (200 - 100) + 100)
}

const aliens = new Character("Space Aliens", 500, 20, 500)
aliens.attack = () => {
    Math.floor(Math.random() * (275 - 200) + 200)
}

const cannibals = new Character("Space Cannibals", 1200, 50, 400)
cannibals.attack = () => {
    Math.floor((Math.random() * (150 - 100)) + 100)
}

/////////////////////// MAIN CHARACTER ///////////////////////

const player = new Character("", 1000, 10, 600)

/////////////////////// BOMB CONSTRUCTOR FUNCTION ////////////////////////////

function Bomb(name) {
    this.name = name;
}

const bigBomb = new Bomb("Big Bomb")
bigBomb.attack = () => {
    Math.floor(Math.random() * (700 - 550) + 550)
}

const mediumBomb = new Bomb("Medium Bomb")
mediumBomb.attack = () => {
    Math.floor(Math.random() * (540 - 400) + 200)
}

const littleBomb = new Bomb("Little Bomb")
littleBomb.attack = () => {
    Math.floor(Math.random() * (390 - 300) + 300)
}

//////////////// RANDOM ENEMY GENERATOR //////////////////

const enemyName = () => {
    const theirName = Math.ceil(Math.random() * 4)
    if (theirName === 1) {
        // while (pirates.health > 0) {
            return pirates.name
        // }
    } else if (theirName === 2) {
        // while (police.health > 0) {
            return police.name
        // }
    } else if (theirName === 3) {
        // while (aliens.health > 0) {
            return aliens.name
        // }
    } else {
        // while (cannibals.health > 0) {
            return cannibals.name
        // }
    }
}

/////////////////////// CHECK INVENTORY FUNCTION ///////////////////////

const checkInventory = () => {
    console.log("Health: " + player.health)
    console.log("Ammunition: " + player.ammunition)
    console.log("Fuel: " + player.fuel)
}

////////////////////////// PLUNDER FUNCTION //////////////////////////////

const plunder = () => {
    const chanceOfLoot = Math.floor(Math.random() * 100)
    if (chanceOfLoot <= 15) {
        const fuelChance = Math.ceil(Math.random() * (500 - 300) + 300)
        player.fuel += fuelChance
        console.log("Nice loot! We are " + fuelChance + " fuel closer to getting out of here!")
        checkInventory()
    } else if (chanceOfLoot <= 40) {
        const healthChance = Math.ceil(Math.random() * (500 - 150) + 150)
        player.health += healthChance
        console.log("Okay, we got " + healthChance + "health for our time, good haul!")
        checkInventory()
    } else if (chanceOfLoot <= 90) {
        const ammoChance = Math.ceil(Math.random() * (10 - 3) + 3)
        player.ammunition += ammoChance
        console.log("We have " + ammoChance + " more ammo, kinda sucks but better than nothing!")
        checkInventory()
    } else {
        console.log("We were ambushed and we lost " + randName())
    }
}

//////////////////////// RANDOM CREW MEMBER GENERATOR ///////////////////////////

const randName = () => {
    const crewName = Math.floor(Math.random() * (5 - 0))
    return names[crewName]
}

//////////////////////// FLY FUNCTION /////////////////////////

const fly = () => {
    const chanceOfFight = Math.ceil(Math.random() * 4)
    if (chanceOfFight === 1) {
        ask.keyInSelect(choicesList, "No enemies spotted, What next captain?")
        minusMap()
    } else {
        const fightOrRun = ask.keyInYN("Are you prepared for battle? The enemies are appearing out of the mist!")
        if (fightOrRun === true) {
            console.log("Alright " + player.name + ", lets get her done and get the **** outta here! Man the vessels boys!")
            battle()
        } else {
            evade()
        }
    }
}

////////////////////// EVADE FUNCTION /////////////////////////

const evade = () => {
    const chanceOfEvade = Math.floor(Math.random() * 100)
    if (chanceOfEvade >= 60) {
        console.log("You successfully evaded the enemy, keep your hopes up and your head down.")
        minusMap()
    } else {
        console.log("You're gonna have to fight this one out " + player.name + ", I will be crying in the lavoratories if you need me." + "\n\n")
        battle()
    }
}

//////////////////////////////// FIRST STRIKE /////////////////////////////////

const firstStrike = () => {
    const whoStrikesFirst = Math.floor(Math.random() * 100)
    if (whoStrikesFirst() > 50) {
        let b = player.attack()
        enemyName.health - b
        console.log("You hurt " + chosenEnemy + " for " + b + " damage! Nice!")
    } else {
        let a = chosenEnemy.attack()
        player.health - a
        console.log(chosenEnemy + " hurt you for " + a + " damage, be Careful!")
    }
}

///////////////////////////////// BATTLE FUNCTION //////////////////////////////////

// const dodge = () => {
//     const dodgeChance = Math.floor(Math.random() * 100)
//     if (dodgeChance > 50) {

//     } else {

//     }
// }

const battle = () => {
    firstStrike()
}

const miss = () => {
    const misses = Math.floor(Math.random() * 100)

}


// const yourMove = () => {
//     const fightOptions = [bigBomb.name + ": 5 ammo", mediumBomb.name + ": 3 ammo",littleBomb.name + ": 1 ammo"]
//     const bombChoices = ask.keyInSelect(fightOptions, "How would you like to attack?")
//     if (fightOptions[bombChoices] == "1") {
//         console.log(chosenEnemy.health - bigBomb.attack())
//         console.log(chosenEnemy.health)
//     } else if (fightOptions[bombChoices] == "2") {
//         console.log(chosenEnemy.health - mediumBomb.attack())
//         console.log(chosenEnemy.health)
//     } else if (fightOptions[bombChoices] == "3") {
//         console.log(chosenEnemy.health - littleBomb.attack())
//         console.log(chosenEnemy.health)
//     }
// }


ask.keyIn("A short time ago, in a place not too far away, the greatest space chase the galaxy has ever seen took place. This is the story...", {hideEchoBack: true})
player.name = ask.question("\n\n\n\n" + "Good morning captain, we are now entering undiscovered territory that has not been registered into our systems, the central sun has a very strong gravitational pull. We will require at least 3000 fuel to escape this hell hole. What is your name sir? ")
ask.keyIn("Alright captain " + player.name + ", I am at your service. I will be on guard, who knows what is waiting for us out there...", {hideEchoBack: true})
console.log(enemyName())
while (player.health > 0 && map.length > 2 && player.ammunition > 0 && player.fuel > 0) {
    const choice = ask.keyInSelect(choicesList,"What would you like to do?")
    if(choicesList[choice] === "fly") {
        fly()
        minusMap()
    } else if (choicesList[choice] === "plunder") {
        plunder()
        minusMap()
    } else if (choicesList[choice] === "check inventory") {
        checkInventory()
    } else {
        player.health = 0
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


