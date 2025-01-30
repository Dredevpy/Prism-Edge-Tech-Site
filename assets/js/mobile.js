document.addEventListener('DOMContentLoaded', function () {
    // Get the mobile menu and the toggle button
    const mobileMenu = document.getElementById('mobile-menu');
    const toggleButton = document.querySelector('.nav-toggle');

    // Add a click event listener to the toggle button
    toggleButton.addEventListener('click', function () {
        // Toggle the 'show' class on the mobile menu
        mobileMenu.classList.toggle('show');
        
    });
});
