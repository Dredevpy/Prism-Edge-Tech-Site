$(document).ready(function () {
    let isScrolling = false;
    let navLinks = $('.navBar .nav-link');
    let sections = $('section');
    let currentSectionIndex = 0;

    // Function to handle smooth scrolling
    function smoothScroll(target) {
        isScrolling = true;
        const targetElement = document.querySelector(target);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(() => {
            isScrolling = false;
        }, 800);
    }


        // Function to check which section is in the viewport and set the active link
     function checkActiveSection() {
        let closestSection = null;
        let closestDistance = Infinity;
            sections.each(function(index) {
                const rect = this.getBoundingClientRect();
                const distance = Math.abs(rect.top);

                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                     if (distance < closestDistance) {
                        closestDistance = distance;
                        closestSection = this;
                          currentSectionIndex = index;
                     }
                }
            });
            if(closestSection) {
                setActiveNavLink(closestSection.id);
            }
    }


    function setActiveNavLink(sectionId) {
        navLinks.removeClass('active');
        $(`.navBar a[href="#${sectionId}"]`).addClass('active');
    }


    // Handle navigation clicks
    navLinks.on('click', function (event) {
        event.preventDefault();
        if(!isScrolling){
             let target = $(this).attr('href');
            smoothScroll(target);
        }
    });


     // Check for active section on page load and scroll
    checkActiveSection();
    $(window).on('scroll', checkActiveSection);


    // Restore default scrolling
   $(window).off('wheel touchmove');
});