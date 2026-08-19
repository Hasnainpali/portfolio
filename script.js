/* =========================================
   MOBILE NAVIGATION
========================================= */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {

  hamburger.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("open");

    hamburger.classList.toggle("active", isOpen);

    hamburger.setAttribute(
      "aria-expanded",
      isOpen
    );

    document.body.classList.toggle(
      "menu-open",
      isOpen
    );

  });


  /* Close menu when clicking nav link */

  const navLinks = navMenu.querySelectorAll("a");

  navLinks.forEach(link => {

    link.addEventListener("click", () => {

      navMenu.classList.remove("open");

      hamburger.classList.remove("active");

      hamburger.setAttribute(
        "aria-expanded",
        "false"
      );

      document.body.classList.remove(
        "menu-open"
      );

    });

  });

}


/* =========================================
   TYPING EFFECT
========================================= */

const typedElement = document.getElementById("typed");

const words = [
  "React applications",
  "modern dashboards",
  "responsive interfaces",
  "scalable frontend systems"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

  if (!typedElement) return;

  const currentWord = words[wordIndex];

  if (!deleting) {

    characterIndex++;

    typedElement.textContent =
      currentWord.substring(
        0,
        characterIndex
      );

    if (
      characterIndex ===
      currentWord.length
    ) {

      deleting = true;

      setTimeout(typeEffect, 1400);

      return;
    }

  } else {

    characterIndex--;

    typedElement.textContent =
      currentWord.substring(
        0,
        characterIndex
      );

    if (characterIndex === 0) {

      deleting = false;

      wordIndex =
        (wordIndex + 1) %
        words.length;

    }

  }

  const speed = deleting ? 45 : 75;

  setTimeout(typeEffect, speed);
}


typeEffect();


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(

    (entries, observer) => {

      entries.forEach(entry => {

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


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
  document.querySelectorAll("section[id]");

const navigationLinks =
  document.querySelectorAll(
    ".nav a[href^='#']"
  );


function updateActiveNavigation() {

  let currentSection = "";

  const scrollPosition =
    window.scrollY + 180;


  sections.forEach(section => {

    const sectionTop =
      section.offsetTop;

    const sectionHeight =
      section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition <
        sectionTop + sectionHeight
    ) {

      currentSection =
        section.getAttribute("id");

    }

  });


  navigationLinks.forEach(link => {

    link.classList.remove("active");

    const href =
      link.getAttribute("href");

    if (
      href === `#${currentSection}`
    ) {

      link.classList.add("active");

    }

  });

}


window.addEventListener(
  "scroll",
  updateActiveNavigation,
  {
    passive: true
  }
);


window.addEventListener(
  "load",
  updateActiveNavigation
);


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const header =
  document.querySelector(".site-header");


function updateHeader() {

  if (!header) return;

  if (window.scrollY > 30) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

}


window.addEventListener(
  "scroll",
  updateHeader,
  {
    passive: true
  }
);


/* =========================================
   IMAGE FALLBACK
========================================= */

document
  .querySelectorAll("img")
  .forEach(image => {

    image.addEventListener(
      "error",
      () => {

        if (
          image.dataset.fallbackApplied
        ) {
          return;
        }

        image.dataset.fallbackApplied =
          "true";

        image.src =
          "https://via.placeholder.com/800x500?text=Project";

      }
    );

  });


/* =========================================
   CURRENT YEAR
========================================= */

const currentYear =
  new Date().getFullYear();

const footerText =
  document.querySelector(".footer p");

if (footerText) {

  footerText.textContent =
    `© ${currentYear} Hasnain Iqbal`;

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      navMenu &&
      navMenu.classList.contains("open")
    ) {

      navMenu.classList.remove("open");

      hamburger.classList.remove("active");

      hamburger.setAttribute(
        "aria-expanded",
        "false"
      );

      document.body.classList.remove(
        "menu-open"
      );

    }

  }
);