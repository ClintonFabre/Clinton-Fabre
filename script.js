/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================================
   SCROLL ANIMATION
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".section-title, .profile-text, .stat, .project, .case-study, .credential, .reference-card, .privacy-card"
    );


animatedElements.forEach(function (element) {

    element.classList.add("fade-in");

});


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


animatedElements.forEach(function (element) {

    observer.observe(element);

});


/* =========================================================
   PRINT RÉSUMÉ
========================================================= */

function printResume() {

    window.print();

}


/* =========================================================
   PROFILE CARD INTERACTION
========================================================= */

const profileCard =
    document.querySelector(".hero-image");


if (profileCard) {

    profileCard.addEventListener(
        "mousemove",
        function (event) {

            if (window.innerWidth <= 900) {
                return;
            }

            const rect =
                profileCard.getBoundingClientRect();

            const x =
                (event.clientX - rect.left)
                / rect.width;

            const y =
                (event.clientY - rect.top)
                / rect.height;

            const rotateY =
                (x - 0.5) * 8;

            const rotateX =
                (y - 0.5) * -8;

            profileCard.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        }
    );


    profileCard.addEventListener(
        "mouseleave",
        function () {

            profileCard.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg)";

        }
    );

}


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (anchor) {

    anchor.addEventListener(
        "click",
        function (event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});
