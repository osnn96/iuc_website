document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Find the target section

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth', // Smooth scroll
            block: 'start' // Align to the start of the section
        });
    });
});
