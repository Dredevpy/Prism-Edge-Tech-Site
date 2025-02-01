document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".nav-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelectorAll("#mobile-menu .navBar a");
    const sections = document.querySelectorAll("section");

    // Toggle mobile menu
    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("show");
    });

    function showSection(targetId) {
        sections.forEach(section => {
            section.classList.add("hide");
            section.style.overflowY = "hidden";
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove("hide");
            targetSection.style.overflowY = "auto";
        }

        // Close menu after selection
        mobileMenu.classList.remove("show");
    }

    // Handle menu item clicks
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            showSection(targetId);
        });
    });

    // Initialize by showing the first section
    showSection(sections[0].id);
});
