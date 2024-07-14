document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    clearErrors();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || phone === "" || message === "") {
        showError("name", "Name is required.");
        showError("email", "Email is required.");
        showError("phone", "Phone number is required.");
        showError("message", "Message is required.");
        return;
    }

    if (!validateEmail(email)) {
        showError("email", "Please enter a valid email address.");
        return;
    }

    if (!validatePhone(phone)) {
        showError("phone", "Please enter a valid phone number.");
        return;
    }

    alert("Form submitted successfully!");

    // Here you can add code to send form data to a server if needed
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(String(phone));
}

function showError(field, message) {
    document.getElementById(field + 'Error').textContent = message;
    document.getElementById(field).classList.add('error');
}

function clearErrors() {
    const errorFields = document.querySelectorAll('.error-message');
    errorFields.forEach(field => field.textContent = '');

    const errorInputs = document.querySelectorAll('.error');
    errorInputs.forEach(input => input.classList.remove('error'));
}