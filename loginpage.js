let isSignedIn = false;
// check credentials
function loginUser() {
    // get input email & pw from input form
    const inputEmail = document.getElementById("emailInput").value;
    const inputPassword = document.getElementById("passwordInput").value;

    const usersString = localStorage.getItem("users") || "[]"
    const users = JSON.parse(usersString);
    // looks for the email in the user list and compares it to the input email
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (inputEmail == user.email.toLowerCase() && inputPassword == user.password) {
            // successful login
            console.log('Found credentials');
            localStorage.setItem("loggedInAs", inputEmail);
            return alert("Logged in successfully");
            isSignedIn = true;
        } else {
            console.log('credentials not found');
            return alert("Email or password wrong");
            isSignedIn = false;
        }
    }
}

//testing
function checkLoggedIn() {
    if (isSignedIn = true) {
        alert("signed in");
    } else {
        alert("not signed in");
    }
}

function logout() {
    isSignedIn = false;
}