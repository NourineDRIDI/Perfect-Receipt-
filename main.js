document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault()
    
    let email = document.getElementById("email").value

    if (email) {
        alert('Thank you for subscribing with ' + email + '!')
        document.getElementById('newsletterForm').reset()
    }
}) 

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault()
    const email = document.querySelector('input[type="email"]').value
    if (validateEmail(email)) {
        alert('Thank you for subscribing!')
    } else {
        alert('Please enter a valid email address.')
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
}
// check boxes : 
document.querySelectorAll('form input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
      const label = this.nextElementSibling;
      label.style.textDecoration = this.checked ? 'line-through' : 'none';
    });
  });



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
})



