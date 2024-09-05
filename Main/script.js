document.addEventListener('DOMContentLoaded', () => {
    // Check if user is already logged in
    if (localStorage.getItem('loggedIn') === 'true') {
        window.location.href = 'home.html'; // Redirect to home page
    }
});

document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem('loggedIn', 'true'); // Mark user as logged in
        alert('Login Successful!');
        window.location.href = 'home.html'; // Redirect to home page
    } else {
        alert('Invalid username or password.');
    }
});

document.getElementById('sign-up-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('sign-up-username').value;
    const password = document.getElementById('sign-up-password').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Sign Up Successful!');
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        alert('Please fill in all fields.');
    }
});

function showSignUp() {
    window.location.href = 'signup.html'; // Redirect to sign-up page
}

function showLogin() {
    window.location.href = 'login.html'; // Redirect to login page
}
