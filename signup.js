
$(document).ready(function() {
    $('#signUpForm').on('submit', function(event) {
        event.preventDefault(); 
        
        $('.error').text('');

        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();

        let valid = true;

        if (name === '') {
            $('#nameError').text('Name is required.');
            valid = false;
        }

        if (!validateEmail(email)) {
            $('#emailError').text('Invalid email format.');
            valid = false;
        }

        if (password.length < 6) {
            $('#passwordError').text('Password must be at least 6 characters long.');
            valid = false;
        }

        if (password !== confirmPassword) {
            $('#confirmPasswordError').text('Passwords do not match.');
            valid = false;
        }

        
        if (valid) {
            createAccount(name, email, password);
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function createAccount(name, email, password) {
             console.log('Creating account for:', name, email);

        
        $('#successMessage').show();

       
        setTimeout(function() {
            window.location.href = './verification.html'; 
        }, 2000);

        
        $('#signUpForm')[0].reset();
    }
});
