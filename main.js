function goBack() {
    window.history.back();
}

function facebookLogin() {
    window.location.href = 'https://www.facebook.com/';
}

function googleLogin() {
    window.location.href = 'https://www.google.com/';
}

function goToLogin() {
    window.location.href = 'index.html';
}

// Add this script to handle form submission and display user email in verification page
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.querySelector('.register-form form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            localStorage.setItem('userEmail', email);
            window.location.href = 'verification.html';
        });
    }

    const userEmailElement = document.getElementById('userEmail');
    if (userEmailElement) {
        const userEmail = localStorage.getItem('userEmail');
        userEmailElement.textContent = userEmail;
    }
});

