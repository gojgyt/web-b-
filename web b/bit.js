// Basic form validation and handling
document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the default way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;

    // Basic validation to ensure all fields are filled
    if (name && email && amount) {
        // Alert the user with a thank you message
        alert('Thank you for your generous donation of $' + amount);
        
        // Here, you can integrate with a payment processor like Stripe or PayPal for actual donation processing.
        
        // For now, we'll just reset the form
        document.getElementById('donation-form').reset();
    } else {
        // If any field is missing, show an alert
        alert('Please fill out all fields before submitting.');
    }
});
