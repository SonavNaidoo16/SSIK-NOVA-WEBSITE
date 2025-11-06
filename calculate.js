
document.getElementById("calculateBtn").addEventListener("click", function() {
    const courses = document.querySelectorAll('input[name="course"]:checked');
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    let selectedCourses = [];
    let subtotal = 0;

    courses.forEach(course => {
        selectedCourses.push(course.value);
        subtotal += parseFloat(course.dataset.fee);
    });

    let discount = 0;
    if (selectedCourses.length === 2) {
        discount = 0.05; // 5% discount
    } else if (selectedCourses.length === 3) {
        discount = 0.10; // 10% discount
    } else if (selectedCourses.length > 3) {
        discount = 0.15; // 15% discount
    }

    const discountAmount = subtotal * discount;
    const discountedSubtotal = subtotal - discountAmount;
    const vat = discountedSubtotal * 0.15;
    const total = discountedSubtotal + vat;

    document.getElementById("subtotal").textContent = `Subtotal: R${subtotal.toFixed(2)}`;
    const discountLine = document.getElementById("discount");
    if (discount > 0) {
        discountLine.textContent = `Discount (${(discount * 100).toFixed(0)}%): -R${discountAmount.toFixed(2)}`;
        discountLine.style.display = "block";
    } else {
        discountLine.style.display = "none";
    }
    document.getElementById("vat").textContent = `VAT (15%): R${vat.toFixed(2)}`;
    document.getElementById("total").textContent = `Total: R${total.toFixed(2)}`;
});
