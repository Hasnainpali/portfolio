/* =========================================
   MOBILE NAVIGATION
========================================= */

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");


if (hamburger && nav) {

  hamburger.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("open");

    hamburger.setAttribute(
      "aria-expanded",
      isOpen
    );

  });


  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");

      hamburger.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


  document.addEventListener("click", (event) => {

    if (
      !nav.contains(event.target) &&
      !hamburger.contains(event.target)
    ) {

      nav.classList.remove("open");

      hamburger.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });

}


/* =========================================
   TYPING EFFECT
========================================= */

const typedEl = document.getElementById("typed");

const words = [
  "React Developer",
  "Frontend Engineer",
  "UI / UX Focused Developer",
  "Web Application Builder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeLoop() {

  if (!typedEl) return;


  const currentWord =
    words[wordIndex];


  if (!deleting) {

    charIndex++;

    typedEl.textContent =
      currentWord.slice(
        0,
        charIndex
      );


    if (
      charIndex ===
      currentWord.length
    ) {

      deleting = true;

      setTimeout(
        typeLoop,
        1400
      );

      return;
    }

  } else {

    charIndex--;

    typedEl.textContent =
      currentWord.slice(
        0,
        charIndex
      );


    if (charIndex === 0) {

      deleting = false;

      wordIndex =
        (wordIndex + 1) %
        words.length;

    }

  }


  setTimeout(
    typeLoop,
    deleting ? 45 : 75
  );

}


typeLoop();


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach((element) => {

  revealObserver.observe(element);

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
  document.querySelectorAll("section[id]");


const sectionObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) {
          return;
        }


        const id =
          entry.target.getAttribute("id");


        navLinks.forEach((link) => {

          link.classList.remove(
            "active"
          );


          if (
            link.getAttribute("href") ===
            `#${id}`
          ) {

            link.classList.add(
              "active"
            );

          }

        });

      });

    },
    {
      rootMargin:
        "-35% 0px -55% 0px"
    }
  );


sections.forEach((section) => {

  sectionObserver.observe(section);

});


/* =========================================
   CLOSE MOBILE MENU ON RESIZE
========================================= */

window.addEventListener(
  "resize",
  () => {

    if (
      window.innerWidth > 720 &&
      nav
    ) {

      nav.classList.remove(
        "open"
      );

      hamburger?.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  }
);