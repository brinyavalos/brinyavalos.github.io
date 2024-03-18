let persons = [];
let salaries = [];

function addSalary() {
  const personName = document.getElementById('personName').value.trim();
  const salary = parseFloat(document.getElementById('salary').value.trim());

  if (!personName || isNaN(salary)) {
    alert("Please enter valid name and numeric salary.");
    return;
  }

  persons.push(personName);
  salaries.push(salary);

  document.getElementById('personName').value = '';
  document.getElementById('salary').value = '';

  displaySalary();
  displayResults();

  document.getElementById('personName').focus();
}

function modifySalary() {
    const selectPerson = document.getElementById('selectPerson');
    const selectedPersonIndex = selectPerson.selectedIndex;
    const newSalary = parseFloat(document.getElementById('newSalary').value.trim());
  
    if (selectedPersonIndex === -1 || isNaN(newSalary)) {
      alert("Please select a person and enter a valid numeric salary.");
      return;
    }
  
    salaries[selectedPersonIndex] = newSalary;
  
    displaySalary();
    displayResults();
}

function displayResults() {
  const averageSalary = calculateAverage(salaries);
  const highestSalary = Math.max(...salaries);

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <h3>Results</h3>
    <p>Average Salary: ${averageSalary}</p>
    <p>Highest Salary: ${highestSalary}</p>
  `;
}

function calculateAverage(arr) {
  const total = arr.reduce((acc, curr) => acc + curr, 0);
  return total / arr.length;
}

function displaySalary() {
  const tableBody = document.querySelector('#results_table tbody');
  tableBody.innerHTML = '';

  for (let i = 0; i < persons.length; i++) {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = persons[i];
    cell2.textContent = salaries[i];
  }
}

document.getElementById('addButton').addEventListener('click', addSalary);
document.getElementById('modifyButton').addEventListener('click', modifySalary);

document.getElementById('personName').focus(); // Move cursor to name field initially
