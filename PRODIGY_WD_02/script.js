// Dummy employee data
let employees = [];

// Automatically show the employee management system without login
document.getElementById('login-page').classList.add('hidden');
document.getElementById('app').classList.remove('hidden');

// Employee CRUD operations
const employeeForm = document.getElementById('employee-entry');
const employeeTableBody = document.getElementById('employee-table-body');
let editIndex = -1;

// Add or edit employee
employeeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const id = document.getElementById('employee-id').value;
    const name = document.getElementById('employee-name').value;
    const email = document.getElementById('employee-email').value;
    const role = document.getElementById('employee-role').value;
    const salary = document.getElementById('employee-salary').value;

    if (!validateForm(id, name, email, role, salary)) {
        alert("Please fill all fields correctly.");
        return;
    }

    const employeeData = { id, name, email, role, salary };
    
    if (editIndex === -1) {
        // Add employee
        employees.push(employeeData);
    } else {
        // Update employee
        employees[editIndex] = employeeData;
        editIndex = -1;
    }
    
    resetForm();
    renderEmployeeTable();
});

// Render employee table
function renderEmployeeTable() {
    employeeTableBody.innerHTML = '';
    employees.forEach((employee, index) => {
        const row = `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.email}</td>
                <td>${employee.role}</td>
                <td>${employee.salary}</td>
                <td>
                    <button onclick="editEmployee(${index})">Edit</button>
                    <button onclick="deleteEmployee(${index})">Delete</button>
                </td>
            </tr>
        `;
        employeeTableBody.innerHTML += row;
    });
}

// Delete employee
function deleteEmployee(index) {
    employees.splice(index, 1);
    renderEmployeeTable();
}

// Edit employee
function editEmployee(index) {
    const employee = employees[index];
    document.getElementById('employee-id').value = employee.id;
    document.getElementById('employee-name').value = employee.name;
    document.getElementById('employee-email').value = employee.email;
    document.getElementById('employee-role').value = employee.role;
    document.getElementById('employee-salary').value = employee.salary;
    editIndex = index;
}

// Reset form after adding/updating employee
function resetForm() {
    employeeForm.reset();
    editIndex = -1;
}

// Form validation
function validateForm(id, name, email, role, salary) {
    if (!id || !name || !email || !role || !salary) return false;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) return false;
    if (isNaN(salary) || salary < 0) return false;
    return true;
}
