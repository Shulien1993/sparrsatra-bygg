const openFormBtn = document.getElementById("openFormBtn");
const contactSection = document.getElementById("contact");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (openFormBtn && contactSection) {
    openFormBtn.addEventListener("click", function () {
        contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}

const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});
