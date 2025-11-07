// This script handles the sign-in and sign-out functionality.

// Wait for the DOM to be fully loaded before executing the script.
document.addEventListener('DOMContentLoaded', function() {
    // Find the sign-in form in the document.
    const signinForm = document.querySelector('.signin-form');

    // If the sign-in form exists, add a submit event listener.
    if (signinForm) {
        signinForm.addEventListener('submit', function(event) {
            // Prevent the default form submission behavior.
            event.preventDefault(); 

            // Get the email and password values from the form fields.
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // For demonstration purposes, this is a dummy user validation.
            // In a real application, you would send this data to a server for authentication.
            if (email && password) {
                // If the login is successful, show an alert.
                alert('Login successful!');
                // Extract the username from the email address (the part before the '@').
                const username = email.split("@")[0]; 
                // Store the username in the browser's local storage.
                localStorage.setItem("username", username);
                // Redirect the user to the homepage.
                window.location.href = 'index.html';
            } else {
                // If the login fails, show an alert.
                alert('Invalid email or password.');
            }
        });
    }
});

// This function signs the user out.
function signOut() {
    // Remove the username from local storage.
    localStorage.removeItem("username");
    // Redirect the user to the sign-in page.
    window.location.href = 'signin.html';
}