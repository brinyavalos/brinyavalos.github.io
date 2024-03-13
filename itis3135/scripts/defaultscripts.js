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
    let greetingMessage = "The Joyous Lion welcomes you, " + userName + "! We're glad you are feeling " + userFeeling + "!";
    document.getElementById("greetingMessage").innerText = greetingMessage;
}

function findPolygon() {
    let favNumber = Math.abs(Math.round(parseFloat(document.getElementById("favNumber").value)));
    let polygons = ["Monogon", "Digon", "Trigon", "Tetragon", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Nonagon", "Decagon"];
    let polygonName = polygons[favNumber - 1];

    if (polygonName) {
        alert("The polygon with " + favNumber + " sides is called a " + polygonName + ".");
    } else {
        alert("No polygon found with " + favNumber + " sides.");
    }
}

function sockRandomizer() {
    const colors = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange"];
    const patterns = ["Striped", "Polka Dot", "Argyle", "Solid", "Geometric", "Abstract"];
    const materials = ["Cotton", "Wool", "Silk", "Bamboo", "Polyester", "Merino Wool"];
    const lengths = ["Ankle", "Crew", "Knee-High"];

    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const randomPatternIndex = Math.floor(Math.random() * patterns.length);
    const randomMaterialIndex = Math.floor(Math.random() * materials.length);
    const randomLengthIndex = Math.floor(Math.random() * lengths.length);

    const randomColor = colors[randomColorIndex];
    const randomPattern = patterns[randomPatternIndex];
    const randomMaterial = materials[randomMaterialIndex];
    const randomLength = lengths[randomLengthIndex];

    const sockRecommendation = {
        color: randomColor,
        pattern: randomPattern,
        material: randomMaterial,
        length: randomLength
    };

    return sockRecommendation;
}

function randomSock() {
    const randomSock = sockRandomizer();
    alert("Random Sock Recommendation: \nColor: " + randomSock.color + "\nPattern: " + randomSock.pattern + "\nMaterial: " + randomSock.material + "\nLength: " + randomSock.length);
}

const subscriptionPrices = {
    "1 Month": "$10",
    "3 Months": "$25",
    "6 Months": "$45",
    "12 Months": "$80"
};

function displaySubscriptions() {
    let message = "Subscription Prices:\n";

    for (const duration in subscriptionPrices) {
        message += duration + ": " + subscriptionPrices[duration] + "\n";
    }

    alert(message);
}

function calculateTax() {
    let message = "After Tax:\n";

    for (const duration in subscriptionPrices) {
        let price = parseFloat(subscriptionPrices[duration].replace('$', ''));
        let totalPrice = price * 1.07;
        message += duration + ": $" + totalPrice.toFixed(2) + "\n";
    }

    alert(message);
}

function provideInsult() {
    const insults = ["Ugly", "Stupid", "Silly", "Funny-Looking", "Goofy"];
    const randomInsultIndex = Math.floor(Math.random() * insults.length);
    const randomInsult = insults[randomInsultIndex];

    let message = "Your Socks are " + randomInsult + "! Buy a better pair from us!";
    alert(message);
}