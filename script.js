const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


// Open and close the mobile menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close the menu when a navigation link is clicked
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});