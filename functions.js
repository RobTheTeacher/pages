document.querySelector("h1").textContent = "Functions are cool!"

/*

function sayHello() {
    console.log("Hello World!");
}

*/

const sayHelloWorld = () => {
    console.log("Hello World!");
}

sayHelloWorld();
sayHelloWorld();
sayHelloWorld();
sayHelloWorld();
sayHelloWorld();
sayHelloWorld();

const sayMyName = name => {
    if (name === "Rob") {
        console.log("Hi my name is mister " + name);
    } else {
        console.log("Hi my name is " + name);
    }
}

sayMyName("Rob");
sayMyName("rob");
sayMyName("Anna");
sayMyName("Shirley");

const sayGoodbye = name => {
    console.log("Goodbye " + name);
}

sayGoodbye("Mum!");

/*

function sayGoodBye(name) {
    console.log("Goodbye " + name);
}

sayGoodbye("Rob")

/*
function sayMyName(name) {
    console.log("Hi my name is " + name)
}

*/

const functionWithoutParams = () => { };
const functionWithOneParam = param => {};
const functionWithMultipleParams = (param1, param2) => { };
const oneLineFunction = () => "Don't need måsvingar";

const sayGoodbyeWithLiterals = name => console.log(`Goodbye ${name}`);

sayGoodbyeWithLiterals("Rob");

const sayHello = () => { return "Hello!" };

const sayHelloAndGoodbye = () => console.log(`Function: ${sayHello()} and Goodbye!`);
 
sayHelloAndGoodbye();

const favouriteAnimal = (pet = "cat") => {
    console.log(`My favourite animal is a ${pet}`)
}

favouriteAnimal("Lion");

favouriteAnimal();

const favouriteAnimalSound = (animal = "cat", sound = "miaow") => console.log(`${animal} says ${sound}`);

favouriteAnimalSound(undefined, "purr");

sayGoodbye();

const bestAnimal = animal => { return `${animal} is the best!` }

console.log(bestAnimal("Crocodile"));

document.querySelector("h1").textContent = bestAnimal("Shark")

let myAnimal = bestAnimal("Rat")

console.log(`What is the best animal? ${myAnimal}`);


const introduction = name => `Hi! Ny Name is ${name}. What is yours?`;

const wantToChat = agree => {
    if (!agree) {
        return "No thanks";
    }

    return `Sure! ${introduction("Rob")} What do you want to talk about?`;
}

console.log(wantToChat(true));

let characters = ["Fighter", "Wizard", "Thief", "Archer"];
let monsters = ["Dragon", "Giant", "Demon", "Killer Rabbit"]
let username;
let characterClass;

const createCharacter = () => {
    username = prompt("Enter a name", "What should we call you?");
    characterClass = characters[Math.floor(Math.random() * characters.length)];
}

const characterIntroduction = () => {
    createCharacter();

    let body = document.querySelector("body");
    let characterBio = document.createElement("div");
    characterBio.innerHTML = `<p>Meet ${username}</p><p>${username} is a badass ${characterClass}</p>`;
    body.appendChild(characterBio)
}

const weapon = characterClass => {
    if (characterClass === "Fighter")
        return "sword";

    if (characterClass === "Wizard")
        return "staff";

    if (characterClass === "Thief")
        return "dagger";

    return "bow"
}

const characterSkill = characterClass => {
    let characterWeapon = weapon(characterClass);

    let body = document.querySelector("body");
    let characterSkillDiv = document.createElement("div");
    characterSkillDiv.textContent = `${username} has a very nice ${characterWeapon}. They like to use it a lot`;
    body.appendChild(characterSkillDiv);
}

const monsterBattle = () => {
    let monster = monsters[Math.floor(Math.random() * monsters.length)];
    let roll = Math.floor(Math.random() * 3) + 1;

    let body = document.querySelector("body");
    let monsterDiv = document.createElement("div");
    let monsterDescription = document.createElement("p");
    let monsterFight = document.createElement("p");

    monsterDescription.textContent = `Oh no! ${username} went for a walk and ran into a ${monster}! It looks really angry. It attacks!!!`;
    let outcome = roll === 1 ? `${username} uses their weapon and kills the fierce ${monster}`
                             : roll === 2 ? `${username} uses their weapon and the ${monster} runs away` 
                             : `The ${monster} eats ${username}`;
    
    monsterFight.textContent = outcome;

    monsterDiv.appendChild(monsterDescription);
    monsterDiv.appendChild(monsterFight);
    body.appendChild(monsterDiv);
}

characterIntroduction();
characterSkill(characterClass);
monsterBattle();

