const openFormBtn = document.getElementById("openFormBtn");
const contactSection = document.getElementById("contact");

if (openFormBtn && contactSection) {
    openFormBtn.addEventListener("click", function () {
        contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}
