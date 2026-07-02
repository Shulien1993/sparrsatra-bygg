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

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});
