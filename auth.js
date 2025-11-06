
document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.querySelector('.signin-form');

    if (signinForm) {
        signinForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // a dummy user for demonstration
            if (email === 'user@ssiknova.com' && password === 'password') {
                alert('Login successful!');
                const username = email.split("@")[0]; // extract name before '@'
                localStorage.setItem("username", username);
                window.location.href = 'index.html';
            } else {
                alert('Invalid email or password.');
            }
        });
    }
});
