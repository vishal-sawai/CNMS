// navbar button slide up and down
const menu = document.getElementById('mobile-menu');
const toggle = () => menu.classList.toggle("hidden");

// Student login and teacher login
function StudentLogin() {
    document.getElementById("StudentForm").style.display = "block";
    document.getElementById("TeacherForm").style.display = "none";
    document.getElementById("StudentBtn").style.backgroundColor = "darkred";
    document.getElementById("TeacherBtn").style.backgroundColor = "#2C3E50";
}
function TeacherLogin() {
    document.getElementById("StudentForm").style.display = "none";
    document.getElementById("TeacherForm").style.display = "block";
    document.getElementById("TeacherBtn").style.backgroundColor = "darkred";
    document.getElementById("StudentBtn").style.backgroundColor = "#2C3E50";
}

// navbar profile
const navprofilemenu = document.getElementById('navprofilemenu');
const navprofile = () => navprofilemenu.classList.toggle("hidden");


//  data send 
function formdata(val1) {
    document.getElementById("course").value = val1;
}