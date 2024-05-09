document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Implement login functionality here
    window.location.href = "upload.html"; // Redirect to employee information page after successful login
});

document.addEventListener("DOMContentLoaded", function() {
    const signInBtnLink = document.querySelector('.signInBtn-link');
    const signUpBtnLink = document.querySelector('.signUpBtn-link');
    const wrapper = document.querySelector('.wrapper');
    const passwordInput = document.getElementById('password');
    const signupPasswordInput = document.getElementById('signup-password');
    const passwordMessage = document.getElementById('password-message');
    const signupPasswordMessage = document.getElementById('signup-password-message');

    signUpBtnLink.addEventListener('click', () => {
        wrapper.classList.toggle('active');
    });

    signInBtnLink.addEventListener('click', () => {
        wrapper.classList.toggle('active');
    });

    passwordInput.addEventListener('input', () => {
        validatePassword(passwordInput.value, passwordMessage);
    });

    signupPasswordInput.addEventListener('input', () => {
        validatePassword(signupPasswordInput.value, signupPasswordMessage);
    });

    function validatePassword(password, messageElement) {
        const upperCaseRegex = /[A-Z]/;
        const lowerCaseRegex = /[a-z]/;
        const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const numberRegex = /[0-9]/;

        let valid = true;
        let message = '';

        if (password.length < 8 || password.length > 16) {
            valid = false;
            message += 'Password must be between 8 and 16 characters.<br>';
        }

        if (!upperCaseRegex.test(password)) {
            valid = false;
            message += 'Password must contain at least one uppercase letter.<br>';
        }

        if (!lowerCaseRegex.test(password)) {
            valid = false;
            message += 'Password must contain at least one lowercase letter.<br>';
        }

        if (!specialCharacterRegex.test(password)) {
            valid = false;
            message += 'Password must contain at least one special character.<br>';
        }

        if (!numberRegex.test(password)) {
            valid = false;
            message += 'Password must contain at least one number.<br>';
        }

        messageElement.innerHTML = message;

        if (valid) {
            messageElement.style.color = 'green';
            messageElement.textContent = 'Password is valid.';
        } else {
            messageElement.style.color = 'red';
        }
    }
    
});
