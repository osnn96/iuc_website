// js/script.js
// Smooth scrolling
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get the href attribute of the clicked link
        const targetElement = document.querySelector(targetId); // Get the target element

        // Scroll to the target element smoothly
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
