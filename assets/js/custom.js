$(document).ready(function () {
    let navLinks = $('.navBar a');
    let sections = $('section');

    // Function to show the section based on hash
    function showSection() {
      const hash = window.location.hash;

      // Hide all sections
      sections.addClass('hide');
       // Remove active class from all links
        navLinks.removeClass('active');
      if (hash) {
        const targetSection = $(hash);
           // Check if the target exists
        if (targetSection.length) {
        // Show the target section
         targetSection.removeClass('hide');
         // Add the active class
            $(`.navBar a[href="${hash}"]`).addClass('active');
         } else {
                $('section').first().removeClass('hide');
                 $('.navBar a').first().addClass('active');
        }
       } else {
           // If no hash, show the first section
             sections.first().removeClass('hide');
            $('.navBar a').first().addClass('active');
        }
    }



    // Navigation link click handler
    $('.navBar a').on('click', function (event) {
        event.preventDefault();
        const target = $(this).attr('href');
          // Update the hash without triggering hashchange event
        window.history.pushState(null, null, target);

        showSection();
    });

    // Hashchange event handler
     $(window).on('hashchange', showSection);

    // Initialize on page load
    showSection();
});