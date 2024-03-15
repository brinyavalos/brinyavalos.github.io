let persons = [];
let salaries = [];

function addSalary() {
    let name = document.getElementById("nameInput").value.trim();
    let salary = document.getElementById("salaryInput").value.trim();

    if (name === "" || isNaN(salary)) {
        alert("Please enter valid name and numeric salary.");
        return;
    }

    persons.push(name);
    salaries.push(parseInt(salary));

    document.getElementById("nameInput").value = "";
    document.getElementById("salaryInput").value = "";

    displaySalary();
    displayEmployeeDropdown();
    document.getElementById("nameInput").focus();
}

function modifySalary() {
    let selectedIndex = document.getElementById("employeeSelect").selectedIndex;
    if (selectedIndex === -1) {
        alert("Please select an employee to modify.");
        return;
    }

    let newName = persons[selectedIndex];
    let newSalary = parseInt(document.getElementById("newSalaryInput").value.trim());

    if (isNaN(newSalary)) {
        alert("Please enter a numeric salary.");
        return;
    }

    salaries[selectedIndex] = newSalary;

    displaySalary();
    document.getElementById("newSalaryInput").value = "";
}

function displayEmployeeDropdown() {
    let selectElement = document.getElementById("employeeSelect");
    selectElement.innerHTML = "";

    persons.forEach(function (person) {
        let option = document.createElement("option");
        option.text = person;
        selectElement.add(option);
    });
}

function displayResults() {
    let totalSalary = salaries.reduce((acc, curr) => acc + curr, 0);
    let averageSalary = totalSalary / salaries.length;
    let highestSalary = Math.max(...salaries);

    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    resultsDiv.innerHTML += "<h2>Results</h2>";
    resultsDiv.innerHTML += "<p>Average Salary: " + averageSalary.toFixed(2) + "</p>";
    resultsDiv.innerHTML += "<p>Highest Salary: " + highestSalary + "</p>";
}

function displaySalary() {
    let table = document.getElementById("results_table");
    table.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";

    for (let i = 0; i < persons.length; i++) {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.textContent = persons[i];
        cell2.textContent = salaries[i];
    }

    displayResults();
}

document.getElementById("nameInput").focus();
