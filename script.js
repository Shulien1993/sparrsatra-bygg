const openFormBtn = document.getElementById("openFormBtn");
const contactSection = document.getElementById("contact");
const contactForm = document.querySelector(".contact-form");

openFormBtn.addEventListener("click", function () {
    contactSection.scrollIntoView({
        behavior: "smooth"
    });
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Tack! Din förfrågan är skickad. Detta är bara en demo just nu.");
});