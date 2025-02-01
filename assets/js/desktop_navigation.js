document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navBar a");
    const sections = document.querySelectorAll("section");

    function showSection(targetId) {
        // Hide all sections and disable scrolling on them
        sections.forEach(section => {
            section.classList.add("hide");
            section.style.overflowY = "hidden";
        });

        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove("active"));

        // Show the target section and allow scrolling
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove("hide");
            targetSection.style.overflowY = "auto";
            document.querySelector(`.navBar a[href="#${targetId}"]`).classList.add("active");
        }
    }

    // Handle desktop navigation clicks
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
