// Slide navbar into view on page load
window.addEventListener("load", () => {
    document.querySelector("header").style.top = "0px";
    document.querySelector(".logo").style.opacity = "1";
    document.querySelector(".logo").style.transform = "translateY(0)";
});

// Change navbar background on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);

    // Fade in sections on scroll
    document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Highlight active menu item on click
const links = document.querySelectorAll(".nav-links a");
links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});
