// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", function() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) { // Adjust offset as needed
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.classList.contains(current)) {
                link.classList.add("active");
            }
        });
    });
});
