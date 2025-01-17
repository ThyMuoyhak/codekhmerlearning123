// Check if the user is logged in by looking for the session storage
const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    
if (isLoggedIn === 'true') {
    // Retrieve user data from sessionStorage
    const user = JSON.parse(sessionStorage.getItem('user'));

    // Display the user profile data
    document.getElementById('profileImage').src = user.imageProfile;
    document.getElementById('profileName').textContent = `${user.firstName} ${user.lastName}`;
    document.getElementById('profileGender').textContent = `ភេទ: ${user.gender}`;
    document.getElementById('profileEmail').textContent = `អ៊ីម៊ែល: ${user.email}`;
    document.getElementById('profileUsername').textContent = `ឈ្មោះអ្នកប្រើប្រាស់: ${user.username}`;
} else {
    // If not logged in, redirect to the login page
    window.location.href = 'login.html';
}

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', function() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('user');
    window.location.href = 'index.html';  // Redirect to login page after logout
});