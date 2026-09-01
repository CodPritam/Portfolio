/* =========================================================
   PRITAM PANIGRAHI — PORTFOLIO
   Phase 1: Navigation + basic interactions
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navMenu.classList.toggle("open");

        menuToggle.classList.toggle(
            "active",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );
    });
}


/* =========================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
   ========================================================= */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (!navMenu || !menuToggle) {
            return;
        }

        navMenu.classList.remove("open");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        document.body.classList.remove(
            "menu-open"
        );
    });
});


/* =========================================================
   CLOSE MENU WITH ESCAPE KEY
   ========================================================= */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        navMenu &&
        navMenu.classList.contains("open")
    ) {

        navMenu.classList.remove("open");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        document.body.classList.remove(
            "menu-open"
        );
    }
});


/* =========================================================
   HEADER SCROLL EFFECT
   ========================================================= */

const header =
    document.getElementById("header");


const handleHeaderScroll = () => {

    if (!header) {
        return;
    }

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");
    }
};


window.addEventListener(
    "scroll",
    handleHeaderScroll,
    { passive: true }
);


/* Run once when page loads */
handleHeaderScroll();


/* =========================================================
   ACTIVE NAVIGATION SECTION
   ========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const updateActiveSection = () => {

    const scrollPosition =
        window.scrollY + 140;

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionBottom =
            sectionTop +
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");

        const correspondingLink =
            document.querySelector(
                `.nav-link[data-section="${sectionId}"]`
            );

        if (!correspondingLink) {
            return;
        }

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
        ) {

            navLinks.forEach((link) => {
                link.classList.remove("active");
            });

            correspondingLink.classList.add(
                "active"
            );
        }
    });
};


window.addEventListener(
    "scroll",
    updateActiveSection,
    { passive: true }
);


/* Run once on page load */
updateActiveSection();