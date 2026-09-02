function signUp(event) {
    // Prevent form from refreshing the page
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const gender = document.getElementById("gender").value;
    const pass = document.getElementById("password1").value;
    const password = document.getElementById("password2").value;

    const message = document.getElementById("message");

    // Check empty fields
    if (name === "" || username === "" || email === "" || gender === "" || pass === "" || password === "") {
        message.innerHTML = "All fields are necessary.";
        message.style.color = "red";
        return;
    }

    // Check password length
    if (pass.length < 6) {
        message.innerHTML = "Password must contain at least 6 characters.";
        message.style.color = "red";
        return;
    }

    // Check passwords
    if (pass !== password) {
        message.innerHTML = "Both passwords are not same. Please try again.";
        message.style.color = "red";
        return;
    }

    // Registration successful
    message.innerHTML = "Registration Successful..!!";
    message.style.color = "green";

    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Gender:", gender);
}

