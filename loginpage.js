// get input email & pw from input form
const inputEmail = document.getElementById("emailInput").value;
const inputPassword = document.getElementById("passwordInput").value;

// check credentials
function loginUser() {
    // looks for the email in the user list and compares it to the input email
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (inputEmail == user.email.toLowerCase() && inputPassword == user.password) {
            // successful login
            console.log('Found credentials');
            localStorage.setItem("loggedInAs", inputEmail);
            window.location.href = "mainpage.html";
        } else {
            console.log('credentials not found');
            return alert("Email or password wrong");
        }
    }
}