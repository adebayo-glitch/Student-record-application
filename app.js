// Cache elements by getElementById 
const studentForm = document.getElementById('addStudentForm');

// Cache elements by querySelector 
const studentList = document.querySelector('#students');
const studentTemplate = document.querySelector('#studentTemplate');

// Event listeners
studentForm.addEventListener('submit', addStudent);
studentList.addEventListener('click', deleteStudent);