let report;
let password;
let username;

document.getElementById('log-in-button').onclick = function(){
    report = document.getElementById('an')
    password = document.getElementById('password').value;
    username = document.getElementById('username').value;
    if (username == "Martinko1006") {
        if (password == "0") {
            window.location = "https://google.com";
        }
    }
}