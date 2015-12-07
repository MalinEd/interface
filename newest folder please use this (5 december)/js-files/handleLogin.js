/**
 * Created by Andreas on 2015-12-07.
 */

var admins = getAdmins();
var customers = getUsers();

function validateLogin() {
        var un = document.loginForm.username.value;
        var pw = document.loginForm.password.value;
    for (var i=0; i<customers.length; i++) {
        if ((un == customers[i].Username) && (pw == customers[i].Password)) {
            document.loginForm.action = "custview.html";
            return true;
        }
        else if ((un == admins[i].Username) && (pw == admins[i].Password)) {
            document.loginForm.action = "empview.html";
            return true;
        }
        else {
            alert("Login was unseccesful, please check your username and password. If the problem remains please contact the bartender to check your credit")
        }
    }
}

function getAdmins() {
    return [
        {"Firstname" : "Ervin","Lastname" : "Todd","Username" : "ervtodd","Password" : "ervtodd"},
        {"Firstname" : "Hiram","Lastname" : "Christopherson","Username" : "hirchr","Password" : "hirchr"}
    ];
}

function getUsers() {
    return [
        {"Firstname" : "Aamu","Lastname" : "Stankic","Username" : "aamsta","Password" : "aamsta"},
        {"Firstname" : "Andrea","Lastname" : "Darzi","Username" : "anddar","Password" : "anddar"}
    ];
}