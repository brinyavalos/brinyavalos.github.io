// Declare empty arrays
let persons = [];
let salaries = [];

// Function to add a person and salary to the arrays
function addSalary() {
    const nameInput = document.getElementById("name").value.trim();
    const salaryInput = document.getElementById("salary").value.trim();

    // Data validation
    if (nameInput === "" || salaryInput === "" || isNaN(parseFloat(salaryInput))) {
        alert("Please enter valid name and numeric salary.");
        return;
    }

    // Add to arrays
    persons.push(nameInput);
    salaries.push(parseFloat(salaryInput));

    // Move cursor to name field
    document.getElementById("name").focus();
}

// Function to modify the salary of an employee
function modifySalary() {
    const dropdown = document.getElementById('employeeDropdown');
    const selectedIndex = dropdown.selectedIndex;
    const selectedEmployee = persons[selectedIndex];

    const newSalaryInput = document.getElementById('newSalary');
    const newSalary = parseFloat(newSalaryInput.value.trim());

    if (isNaN(newSalary)) {
        alert('Please enter a valid salary.');
        return;
    }

    const index = persons.indexOf(selectedEmployee);
    if (index !== -1) {
        salaries[index] = newSalary;
        alert(`Modified ${selectedEmployee}'s salary to $${newSalary}.`);
    } else {
        alert('Employee not found.');
    }

    newSalaryInput.value = '';

    // Move cursor to name field
    document.getElementById("name").focus();
}

// Function to display average and highest salary
function displayResults() {
    const averageSalary = salaries.reduce((total, salary) => total + salary, 0) / salaries.length;
    const highestSalary = Math.max(...salaries);

    // Display results
    document.getElementById("results").innerHTML = `
        <h2>Results</h2>
        <p>Average Salary: ${averageSalary.toFixed(2)}</p>
        <p>Highest Salary: ${highestSalary.toFixed(2)}</p>
    `;
}

// Function to display names and salaries in a table
function displaySalary() {
    const table = document.getElementById("results-table");
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Salary</th>
        </tr>
    `;
    for (let i = 0; i < persons.length; i++) {
        table.innerHTML += `
            <tr>
                <td>${persons[i]}</td>
                <td>${salaries[i]}</td>
            </tr>
        `;
    }
}

// Initial setup
document.addEventListener("DOMContentLoaded", function () {
    // Move cursor to name field
    document.getElementById("name").focus();
});
