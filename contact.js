// This script handles the contact form submission.

// Add a submit event listener to the 'contactForm' element.
document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior, which would reload the page.
    event.preventDefault(); 

    // Gather all required form data and trim any leading/trailing whitespace.
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const type = document.getElementById("type").value.trim();
    const message = document.getElementById("message").value.trim();
    
    // Get the error and response message divs from the HTML.
    const error = document.getElementById("error-message");
    const response = document.getElementById("response");

    // Basic client-side validation using a regular expression for email.
    const emailPattern = /^[^S@S@]+@[^S@]+\.[^S@]+$/;

    // Check if all required fields (name, email, type, message) are filled out.
    if (!name || !email || !type || !message || type === "") { 
        if (error) {
            error.textContent = "Please fill in all required fields (including Reason for Contact).";
        }
        return; // Stop the function if validation fails.
    }

    // Check if the email address is in a valid format.
    if (!emailPattern.test(email)) {
        if (error) {
            error.textContent = "Please enter a valid email address.";
        }
        return; // Stop the function if validation fails.
    }

    // Clear any previous error messages.
    error.textContent = ""; 

    // Define the recipient's email address.
    // !!! IMPORTANT: This should be replaced with the actual company email address. !!!
    const recipient = "info@ssiknova.co.za"; 

    // Encode the subject and body for the mailto link to ensure special characters are handled correctly.
    // The subject line for the email.
    const subject = encodeURIComponent(`SSIK NOVA Contact: ${type} from ${name}`);
    
    // The body content for the email, with line breaks for readability.
    const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Reason for Contact: ${type}\n\n` +
        `--- Message ---\n${message}`
    );

    // Construct the mailto link and open it in the user's default email client.
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    // Provide feedback to the user that their email client is being opened.
    if (response) {
        // Style the response message.
        response.style.color = 'rgb(255, 111, 0)'; 
        response.textContent = "Success! Opening your email client. Please check your device for the new email draft!";
    }
});
