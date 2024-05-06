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
/*function showDescription(index) {
    var descriptions = document.querySelectorAll('.description');
    descriptions.forEach(function(description) {
        description.style.display = 'none';
    });
    descriptions[index].style.display = 'block';
}*/
function showDescription(index) {
    var descriptions = document.querySelectorAll('.description');
    var projects = document.querySelectorAll('.project');

    descriptions.forEach(function(description) {
        description.style.display = 'none';
    });

    projects.forEach(function(project, i) {
        if (i !== index) {
            project.style.display = 'none';
        } else {
            project.style.display = 'block';
        }
    });

    descriptions[index].style.display = 'block';
}
function showProjects() {
    var projects = document.querySelectorAll('.project');
    var descriptions = document.querySelectorAll('.description');

    projects.forEach(function(project) {
        project.style.display = 'block';
    });

    descriptions.forEach(function(description) {
        description.style.display = 'none';
    });
}

dodocument.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Optionally, you can add form validation here before opening the mail app

    // Get the form data
    var formData = new FormData(this);

    // Construct the mailto URL with the form data
    var mailtoURL = 'mailto:your_email@example.com' +
                    '?subject=' + encodeURIComponent('New message from ' + formData.get('name')) +
                    '&body=' + encodeURIComponent(formData.get('message'));

    // Open the user's default mail app with pre-filled content
    window.location.href = mailtoURL;
});
