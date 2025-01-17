document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulated user data (replace this with actual validation)
    const users = [
        { username: 'Muoyhak', password: 'khmer' },
        { username: 'user2', password: 'password456' }
    ];

    // Check if the entered username and password match any user data
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Store login status in sessionStorage
        sessionStorage.setItem('isLoggedIn', 'true');
        // Redirect to home page
        window.location.href = 'home.html';
    } else {
        // Show error message
        document.getElementById('error-message').style.display = 'block';
    }
});
