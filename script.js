const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {
    button.addEventListener("mouseenter", function() {
        button.style.transform = "scale(1.08)";
    });

    button.addEventListener("mouseleave", function() {
        button.style.transform = "scale(1)";
    });
});


const cards = document.querySelectorAll(".skill-box, .project-box");

cards.forEach(function(card) {
    card.addEventListener("mouseenter", function() {
        card.style.transform = "translateY(-8px)";
        card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    });

    card.addEventListener("mouseleave", function() {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
    });
});


const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeBtn.textContent = "Light Mode";
        } else {
            themeBtn.textContent = "Dark Mode";
        }
    });
}


const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        const section = document.querySelector(link.getAttribute("href"));

        if (section) {
            event.preventDefault();

            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (!menuBtn || !navLinks) return;

    if (window.innerWidth <= 650) {
        navLinks.classList.add("menu-hidden");
    }

    menuBtn.addEventListener("click", function() {

        navLinks.classList.toggle("menu-hidden");

        if (navLinks.classList.contains("menu-hidden")) {
            menuBtn.textContent = "☰";
        } else {
            menuBtn.textContent = "✕";
        }

    });

    navLinks.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function() {
            navLinks.classList.add("menu-hidden");
            menuBtn.textContent = "☰";
        });
    });

});

const header = document.querySelector("header");

if (header) {
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
        } else {
            header.style.boxShadow = "none";
        }
    });
}


const skillBoxes = document.querySelectorAll(".skill-box");

skillBoxes.forEach(function(skill, index) {
    skill.style.opacity = "0";
    skill.style.transform = "translateY(20px)";

    setTimeout(function() {
        skill.style.transition = "all 0.8s ease";
        skill.style.opacity = "1";
        skill.style.transform = "translateY(0)";
    }, index * 300);
});
