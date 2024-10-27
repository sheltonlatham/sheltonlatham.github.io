
function displayDateTime() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const dateTimeString = `Today is ${date.toLocaleString('en-US', options)}`;
    document.getElementById("dateTimeDisplay").innerText = dateTimeString;
}

window.onload = displayDateTime;

function greetUser() {
    const userName = document.getElementById("userName").value;
    const userMood = document.getElementById("userMood").value;
    const companyName = "SillyLizardLLC";
    const greetingMessage = `${companyName} welcomes you, ${userName}! We're glad you are doing ${userMood}!`;
    document.getElementById("greetingDisplay").innerText = greetingMessage;
}

function displayPolygon() {
    let number = Math.abs(Math.round(Number(document.getElementById("favoriteNumber").value)));
    const polygonNames = ["monogon", "digon", "trigon", "tetragon", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];
    
    if (number >= 0 && number < polygonNames.length) {
        document.getElementById("polygonDisplay").innerText = `That's a ${polygonNames[number]}!`
    } else {
        document.getElementById("polygonDisplay").innerText = `Please enter a valid number 0 - 10`
    }
}

function firstFunction() {
   document.getElementById("lizardJokeDisplay").innerText = "How many lizards does it take to screw in na light bulb? ... A Chemeleon!"
}

function convertToLizardLengths() {
    const lizardLengthInInches = 10; // Average length of a lizard in inches
    const userLength = parseFloat(document.getElementById("userLength").value);

    if (!isNaN(userLength)) {
        const lizardLengths = (userLength / lizardLengthInInches).toFixed(2);
        document.getElementById("lizardLengthResult").innerText = `That's about ${lizardLengths} lizards long!`;
    } else {
        document.getElementById("lizardLengthResult").innerText = "Please enter a valid length in inches.";
    }
}

function calculateSum() {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        const sum = firstNumber + secondNumber;
        document.getElementById("sumResult").innerText = `The sum of Lizards is: ${sum}`;
    } else {
        document.getElementById("sumResult").innerText = "Please enter valid numbers.";
    }
}


function displayLizardFact() {
    const lizardFacts = [
        "Some lizards can detach their tails to escape predators!",
        "The Komodo dragon, a type of lizard, can grow up to 10 feet long.",
        "Lizards are cold-blooded and rely on the sun to regulate their body temperature.",
        "Geckos have specialized toe pads that allow them to stick to almost any surface.",
        "Chameleons can change their skin color for communication and camouflage."
    ];
    
    const randomIndex = Math.floor(Math.random() * lizardFacts.length);
    document.getElementById("lizardFactDisplay").innerText = lizardFacts[randomIndex];
}

