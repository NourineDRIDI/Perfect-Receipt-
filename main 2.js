//
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
    window.location.href = 'login_new.html'; 
}

function goToHome() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('exampleInputEmail2').value;
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
