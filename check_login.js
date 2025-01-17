// Check if user is logged in
if (!sessionStorage.getItem('isLoggedIn')) {
    // If not logged in, redirect to login page
    window.location.href = 'index.html';
  }

  // Logout function
  function logout() {
    // Clear session storage
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';  // Redirect to login page
  }