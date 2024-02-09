function captureUserInfo() {
    var userInfo = {};
    userInfo.name = prompt("Enter Your Name: ");
    userInfo.age = prompt("Enter Your Age: ");
    userInfo.nationality = prompt("Enter Your Nationality: ");
    userInfo.education = prompt("Enter Your Education: ");
    displayUserInfo(userInfo);
}


function displayUserInfo(userInfo) {
    var userInfoElement = document.getElementById('para');
    userInfoElement.innerHTML = 'Hello ' + userInfo.name + ". You are " + userInfo.age + " years old. Your nationality is " + userInfo.nationality + " and your education is " + userInfo.education;
}


function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

document.addEventListener('DOMContentLoaded', function () {
    const darkModeButton = document.getElementById('darkModeButton');
    darkModeButton.addEventListener('click', toggleDarkMode);
});
