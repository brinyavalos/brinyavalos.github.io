function displayDateTime() {
    let currentDate = new Date();
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let dayOfWeek = daysOfWeek[currentDate.getDay()];
    let dayOfMonth = currentDate.getDate();
    let month = monthsOfYear[currentDate.getMonth()];
    let year = currentDate.getFullYear();
    
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let formattedDateTime = hours + ":" + minutes + ampm + " " + dayOfWeek + ", " + month + " " + dayOfMonth + ", " + year;
    
    document.getElementById("dateTime").innerHTML = formattedDateTime;
}

displayDateTime();

function submitInfo() {
    let userName = document.getElementById("userName").value;
    let userFeeling = document.getElementById("userFeeling").value;
    let greetingMessage = "The Beloved Axolotl welcomes you, " + userName + "! We're glad you are feeling " + userFeeling + "!";
    document.getElementById("greetingMessage").innerText = greetingMessage;
}

function generateCompliment() {
    const compliments = [
        "You are as cute as an axolotl!",
        "Your smile is as radiant as an axolotl's!",
        "You have the charm of an axolotl!",
        "Your intelligence rivals that of an axolotl!",
        "You are as unique as an axolotl's regenerative abilities!"
    ];
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const compliment = compliments[randomIndex];
    document.getElementById("output").innerText = compliment;
}

function translateToAxolotl() {
    const userInput = prompt("Enter a message to translate into Axolotl language:");
    const axolotlTranslation = userInput.replace(/[aeiou]/gi, 'axolotl');
    document.getElementById("output").innerText = axolotlTranslation;
}

function startDanceParty() {
    alert("Let's get the axolotl dance party started!");
}

function predictFuture() {
    const fortunes = [
        "You will find joy in unexpected places, just like an axolotl exploring its habitat!",
        "Good fortune will come your way, guided by the spirit of the axolotl!",
        "Your dreams will be fulfilled, with the persistence of an axolotl regenerating its limbs!"
    ];
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortune = fortunes[randomIndex];
    document.getElementById("output").innerText = fortune;
}
function findPolygon() {
    const favoriteNumber = Math.abs(Math.round(parseFloat(document.getElementById("favoriteNumber").value)));
    const polygons = [
        { sides: 1, name: "henagon" },
        { sides: 2, name: "digon" },
        { sides: 3, name: "triangle" },
        { sides: 4, name: "quadrilateral" },
        { sides: 5, name: "pentagon" },
        { sides: 6, name: "hexagon" },
        { sides: 7, name: "heptagon" },
        { sides: 8, name: "octagon" },
        { sides: 9, name: "nonagon" },
        { sides: 10, name: "decagon" },
    ];

    let polygonName = "polygon";
    for (let i = 0; i < polygons.length; i++) {
        if (favoriteNumber === polygons[i].sides) {
            polygonName = polygons[i].name;
            break;
        }
    }

    alert(`The polygon with ${favoriteNumber} sides is called a ${polygonName}.`);
}
