var divLogin = document.querySelector(".header .login");

divLogin.onclick = function() {
    var loginArea = document.querySelector(".login-area");
    loginArea.style.display = "block";
}

var divClose = document.querySelector(".login-area .close");


divClose.onclick = function() {
    var loginArea = document.querySelector(".login-area");
    divClose.style.display = "none";
}