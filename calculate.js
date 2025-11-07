// This script calculates the total cost of selected courses, including discounts and VAT.

// Add a click event listener to the 'calculateBtn' element.
document.getElementById("calculateBtn").addEventListener("click", function() {
    // Get all selected courses (checked checkboxes).
    const courses = document.querySelectorAll('input[name="course"]:checked');
    // Get the user's name, phone number, and email from the input fields.
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    // Initialize arrays and variables for calculations.
    let selectedCourses = [];
    let subtotal = 0;

    // Loop through each selected course to populate the selectedCourses array and calculate the subtotal.
    courses.forEach(course => {
        selectedCourses.push(course.value);
        subtotal += parseFloat(course.dataset.fee);
    });

    // Determine the discount based on the number of selected courses.
    let discount = 0;
    if (selectedCourses.length === 2) {
        discount = 0.05; // 5% discount for 2 courses.
    } else if (selectedCourses.length === 3) {
        discount = 0.10; // 10% discount for 3 courses.
    } else if (selectedCourses.length > 3) {
        discount = 0.15; // 15% discount for more than 3 courses.
    }

    // Calculate the discount amount, discounted subtotal, VAT, and the final total.
    const discountAmount = subtotal * discount;
    const discountedSubtotal = subtotal - discountAmount;
    const vat = discountedSubtotal * 0.15; // 15% VAT.
    const total = discountedSubtotal + vat;

    // Display the calculated amounts on the page.
    document.getElementById("subtotal").textContent = `Subtotal: R${subtotal.toFixed(2)}`;
    const discountLine = document.getElementById("discount");
    // Only display the discount line if a discount has been applied.
    if (discount > 0) {
        discountLine.textContent = `Discount (${(discount * 100).toFixed(0)}%): -R${discountAmount.toFixed(2)}`;
        discountLine.style.display = "block";
    } else {
        discountLine.style.display = "none";
    }
    document.getElementById("vat").textContent = `VAT (15%): R${vat.toFixed(2)}`;
    document.getElementById("total").textContent = `Total: R${total.toFixed(2)}`;
});