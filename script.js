
document.addEventListener("DOMContentLoaded", function () {

    // Display the current year in the footer
    const copyright = document.getElementById("copyright");

    if (copyright) {
        copyright.textContent =
            "© " + new Date().getFullYear() +
            " Monitha R | All Rights Reserved";
    }

    // Highlight navigation links when clicked
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });

    // Back-to-top button
    const topButton = document.getElementById("topButton");

    if (topButton) {
        topButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Welcome message in browser console
    console.log("Welcome to Monitha R's Portfolio!");

});