document.getElementById('pizza-order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
        // You can add your logic to handle the form submission here
        alert('Order placed successfully!');
    }
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const size = document.getElementById('size').value;
    const toppings = document.querySelectorAll('input[name="toppings"]:checked');
    
    if (name === '' || email === '' || phone === '' || size === '' || toppings.length === 0) {
        alert('Please fill in all required fields.');
        return false;
    }

    // You can add more specific validation as needed (e.g., email format, phone number format)

    return true;
}
