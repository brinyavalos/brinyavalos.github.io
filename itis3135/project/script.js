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

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Constructing the email message
        const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

        // Creating a mailto link with the email content
        const mailtoLink = `mailto:briavatiz02@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;

        // Opening the user's default email client
        window.location.href = mailtoLink;
    });
});
