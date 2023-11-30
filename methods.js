document.querySelector("h1").textContent = "Methods";

/*const sayName = callBackFunction => { // formalGreeting
    let userName = prompt("Enter your name: ");
    console.log(callBackFunction(userName)); // formalGreeting(userName)
}

const formalGreeting = name => {
    return `Good morning, ${name}`
}

sayName(formalGreeting);*/
/*

let animals =["cat", "dog", "bird", "fish"];


console.log(`Is this an array? ${Array.isArray(animals)}`);

for (let i = 0; i < animals.length; i++) {
    console.log(`${animals[i]} is an animal`)
}

const sayHello = name => console.log(`${name} says hello`);

animals.forEach(thisAnimal => sayHello(thisAnimal))

animals.forEach(value => console.log(`${value} is cute`))


animals.forEach(animal => { // Anon function
    if (animal === "bird") {
        console.log(`${animal} has wings!`)
    } else {
        console.log(`${animal} has leg or fin`)
    }
})

const limbs = myParam => { // Cat
    if (myParam === "bird") {
        console.log(`${myParam} has wings!`)
    } else {
        console.log(`${myParam} has leg or fins`)
    }
}

animals.forEach(animal => limbs(animal));// Named function (aka functions expression)

*/


const playGame = () => {
    const characters = ["Fighter", "Ninja", "Wizard", "Amazon", "Necromancer"];
    const enemies = ["Dragon", "Goblin", "Devil", "Giant", "Demigorgon"];

    let newParty = Array.from(characters)

    while (newParty.length > 1) {
        newParty.forEach(character => console.log(`This is a brave ${character}`))
        let deadCharacter = newParty[Math.floor(Math.random() * newParty.length)]
        const enemy = enemies[Math.floor(Math.random() * enemies.length)]

        const chooseYourWeapon = customer => {
            let story = `The ${customer} enters the weapon shop and looks at what is available`;

            let weaponOfChoice;
            if (customer === "Fighter") {
                weaponOfChoice = "sword";
            } else if (customer === "Ninja") {
                weaponOfChoice = "throwing star"
            } else if (customer === "Wizard") {
                weaponOfChoice = "staff";
            } else if (customer === "Amazon") {
                weaponOfChoice = "javelin"
            } else {
                weaponOfChoice = "wand"
            }

            let choosingAWeapon = `The ${customer} sees a beautiful ${weaponOfChoice}. They pay for it in gold and leave the store`;

            return story + " " + choosingAWeapon;
        }

        newParty.forEach(character => console.log(chooseYourWeapon(character)))

        const monsterEncounter = enemy => {
            console.log(`Our brave party run into a ${enemy}! It looks very angry! It attacks!!`)
        }

        monsterEncounter(enemy);

        newParty.forEach(partyMember => console.log(`${partyMember} attacks the ${enemy}`))

        let characterOutcomes = newParty.map(character => {
            if (character === deadCharacter) {
                return `Unfortunately, ${character} was killed`
            }

            return `${character} has levelled up!`;
        })

        characterOutcomes.forEach(outcome => console.log(outcome));

        newParty = newParty.filter(partyMember => partyMember !== deadCharacter);

        /*
        let newParty = [];
        
        for (let i = 0; i < characters.length; i ++) {
            if (characters[i] !== deadCharacter) {
                newParty.push(characters[i])
            }
        }*/

        newParty.forEach(member => console.log(member));
    }

    newParty.forEach(winner => console.log(`${winner} is the only survivor! There can be only one.`))
}

//console.log(newParty.includes("Ninja") ? "The Ninja survived the encounter, but not without scars" : "The other party members buried the NInja on a beautiful hillside");


//console.log(newParty.includes("Ninja") ? newParty.indexOf("Ninja") : "Ninja is not in the array");



let testString = "Wow what a fun game we just made";
console.log(testString);
console.log(testString.length);
console.log(testString.includes("Wow") ? testString.indexOf("Wow") : "Fun is not in the string");
console.log(testString.toLowerCase());
console.log(testString.toUpperCase());
console.log(testString.charAt(7));
console.log(testString[7]);
console.log(testString.slice(-5));

const clickFunction = () => alert("We can do whatever we want")

document.querySelector(".launch-game").onclick = () => playGame();




