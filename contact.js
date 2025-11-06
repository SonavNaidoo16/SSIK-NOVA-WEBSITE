document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // STOP the default form submission (which reloads the page)

    // Gather all required form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const type = document.getElementById("type").value.trim();
    const message = document.getElementById("message").value.trim();
    
    // Get the error and response divs (IDs added in the HTML revision)
    const error = document.getElementById("error-message");
    const response = document.getElementById("response");

    // Basic client-side validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check all required fields (name, email, type, message)
    if (!name || !email || !type || !message || type === "") { 
        if (error) {
            error.textContent = "Please fill in all required fields (including Reason for Contact).";
        }
        return;
    }

    if (!emailPattern.test(email)) {
        if (error) {
            error.textContent = "Please enter a valid email address.";
        }
        return;
    }

    error.textContent = ""; // clear any previous errors

    // Define the Company Email Address (Updated to SSIK NOVA)
    // !!! IMPORTANT: REPLACE THIS PLACEHOLDER WITH YOUR COMPANY'S REAL EMAIL !!!
    const recipient = "info@ssiknova.co.za"; 

    // Encode the Subject and Body for the mailto link (Updated to SSIK NOVA)
    // The Subject line in the email draft
    const subject = encodeURIComponent(`SSIK NOVA Contact: ${type} from ${name}`);
    
    // The Body content in the email draft (Use '%0A' or '\n' for line breaks)
    const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Reason for Contact: ${type}\n\n` +
        `--- Message ---\n${message}`
    );

    // Construct and open the mailto link
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    // Provide feedback to the user
    if (response) {
        // Assuming your accent color is the orange from the original script
        response.style.color = 'rgb(255, 111, 0)'; 
        response.textContent = "Success! Opening your email client. Please check your device for the new email draft!";
    }
});