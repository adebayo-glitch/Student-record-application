// Cache elements by getElementById 
const studentForm = document.getElementById('addStudentForm');

// Cache elements by querySelector 
const studentList = document.querySelector('#students');
const studentTemplate = document.querySelector('#studentTemplate');

// Event listeners
studentForm.addEventListener('submit', addStudent);
studentList.addEventListener('click', deleteStudent);

// BOM methods
window.addEventListener('load', () => {
    alert('Welcome to the Student Record Application!');
});

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    return "Are you sure you want to leave?";
});