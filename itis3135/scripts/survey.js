function validateForm() {
    return true; // Return true if form is valid, otherwise return false
}

function resetForm() {
    // JavaScript function to reset the form
    document.getElementById("byoForm").reset();
}

function addCourse() {
    // JavaScript function to add a new course text box
    var container = document.getElementById("coursesContainer");
    var input = document.createElement("input");
    input.type = "text";
    input.className = "course";
    input.name = "courses[]";
    input.required = true;
    container.appendChild(input);

    var deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        container.removeChild(input);
        container.removeChild(deleteButton);
    };
    container.appendChild(deleteButton);
    container.appendChild(document.createElement("br"));
}
