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

// Dummy student images from Pexels
const dummyImages = [
    'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3775151/pexels-photo-3775151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3775131/pexels-photo-37751531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3775131/pexels-photo-3775161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

// Add student 
function addStudent(e) {
    e.preventDefault();
    // Get form values
    const name = document.getElementById('studentName').value;
    const id = document.getElementById('studentId').value;
    const subject = document.getElementById('studentSubject').value;
    const grade = document.getElementById('studentGrade').value;

    // Validate input
    if (!validateInput(name, id, subject, grade)) {
        return;
    }
     // Create new student element
     const studentElement = createStudentElement(name, id, subject, grade);
     // Add new student to the list
     studentList.appendChild(studentElement);
    // Clear form
    studentForm.reset();
    // Color code grades
    colorCodeGrades();
}
// Validate input function
function validateInput(name, id, subject, grade) {
    if (name.length < 2) {
        alert('Name must be at least 2 characters long.');
        return false;
    }
    if (!/^[A-Z]{2}[0-9]{4}$/.test(id)) {
        alert('Student ID must be in the format AA0000.');
        return false;
    }
    if (subject === '') {
        alert('Please select a subject.');
        return false;
    }
    if (isNaN(grade) || grade < 0 || grade > 100) {
        alert('Grade must be a number between 0 and 100.');
        return false;
    }
    return true;
}

// Create student element 
function createStudentElement(name, id, subject, grade) {
    const fragment = document.createDocumentFragment();
    const studentElement = studentTemplate.content.cloneNode(true);
    const randomImage = dummyImages[Math.floor(Math.random() * dummyImages.length)];
    studentElement.querySelector('.student-image').src = randomImage;
    studentElement.querySelector('.student-name').textContent = name;
    studentElement.querySelector('.student-id').textContent = id;
    studentElement.querySelector('.student-subject').textContent = subject;
    studentElement.querySelector('.student-grade').textContent = grade;
    fragment.appendChild(studentElement);
    return fragment;
}

// Delete student function
function deleteStudent(e) {
    if (e.target.classList.contains('delete-btn')) {
        if (confirm('Are you sure you want to delete this student?')) {
            e.target.closest('.student-item').remove();
        }
    }
}

// Iterate over students and color code grades
function colorCodeGrades() {
    const students = document.querySelectorAll('.student-item');
    students.forEach(student => {
        const gradeElement = student.querySelector('.student-grade');
        const grade = parseInt(gradeElement.textContent);
        if (grade >= 90) {
            gradeElement.style.color = 'green';
        } else if (grade >= 70) {
            gradeElement.style.color = 'blue';
        } else if (grade >= 50) {
            gradeElement.style.color = 'orange';
        } else {
            gradeElement.style.color = 'red';
        }
    });
}
