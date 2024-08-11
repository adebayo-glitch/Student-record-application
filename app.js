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

}