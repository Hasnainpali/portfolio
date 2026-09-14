const header =
  document.getElementById("siteHeader");

const hamburger =
  document.getElementById("hamburger");

const nav =
  document.getElementById("navMenu");

const navLinks =
  document.querySelectorAll(".nav-link");

const progress =
  document.getElementById("scrollProgress");

const backTop =
  document.getElementById("backTop");

const typedEl =
  document.getElementById("typed");

const yearEl =
  document.getElementById("year");


/* ================= YEAR ================= */

if (yearEl) {
  yearEl.textContent =
    new Date().getFullYear();
}


/* ================= MOBILE MENU ================= */

function closeMenu() {

  nav?.classList.remove("open");

  hamburger?.setAttribute(
    "aria-expanded",
    "false"
  );

}


hamburger?.addEventListener(
  "click",
  (event) => {

    event.stopPropagation();

    const open =
      nav.classList.toggle("open");

    hamburger.setAttribute(
      "aria-expanded",
      String(open)
    );

  }
);


navLinks.forEach((link) => {

  link.addEventListener(
    "click",
    closeMenu
  );

});


document.addEventListener(
  "click",
  (event) => {

    if (
      nav &&
      hamburger &&
      !nav.contains(event.target) &&
      !hamburger.contains(event.target)
    ) {

      closeMenu();

    }

  }
);


/* ================= TYPING ================= */

const words = [
  "React Developer",
  "Frontend Engineer",
  "UI-focused Developer",
  "Web Application Builder"
];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeLoop() {

  if (!typedEl) return;


  const word =
    words[wordIndex];


  if (!deleting) {

    charIndex++;

    typedEl.textContent =
      word.slice(
        0,
        charIndex
      );


    if (
      charIndex ===
      word.length
    ) {

      deleting = true;

      setTimeout(
        typeLoop,
        1500
      );

      return;

    }

  } else {

    charIndex--;

    typedEl.textContent =
      word.slice(
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
    deleting ? 42 : 72
  );

}


typeLoop();


/* ================= REVEAL ================= */

const revealObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        }
      );

    },
    {
      threshold: 0.12
    }
  );


document
  .querySelectorAll(".reveal")
  .forEach((element) => {

    revealObserver.observe(
      element
    );

  });


/* ================= ACTIVE NAV ================= */

const sections =
  document.querySelectorAll(
    "section[id]"
  );


const sectionObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            !entry.isIntersecting
          ) {
            return;
          }


          const id =
            entry.target.id;


          navLinks.forEach(
            (link) => {

              link.classList.toggle(
                "active",
                link.getAttribute(
                  "href"
                ) === `#${id}`
              );

            }
          );

        }
      );

    },
    {
      rootMargin:
        "-35% 0px -55% 0px"
    }
  );


sections.forEach(
  (section) => {

    sectionObserver.observe(
      section
    );

  }
);


/* ================= SCROLL ================= */

function onScroll() {

  const scrollTop =
    window.scrollY;


  const pageHeight =
    document.documentElement
      .scrollHeight -
    window.innerHeight;


  const percent =
    pageHeight > 0
      ? (scrollTop / pageHeight) * 100
      : 0;


  if (progress) {

    progress.style.width =
      `${percent}%`;

  }


  header?.classList.toggle(
    "scrolled",
    scrollTop > 20
  );


  backTop?.classList.toggle(
    "show",
    scrollTop > 550
  );

}


window.addEventListener(
  "scroll",
  onScroll,
  {
    passive: true
  }
);


onScroll();


/* ================= BACK TO TOP ================= */

backTop?.addEventListener(
  "click",
  () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


/* ================= RESIZE ================= */

window.addEventListener(
  "resize",
  () => {

    if (
      window.innerWidth > 760
    ) {

      closeMenu();

    }

  }
);


/* ================= SMOOTH NAVIGATION ================= */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach((anchor) => {

    anchor.addEventListener(
      "click",
      (event) => {

        const target =
          document.querySelector(
            anchor.getAttribute("href")
          );


        if (!target) return;


        event.preventDefault();


        const offset =
          header?.offsetHeight ||
          70;


        const top =
          target.getBoundingClientRect()
            .top +
          window.scrollY -
          offset +
          1;


        window.scrollTo({
          top,
          behavior: "smooth"
        });

      }
    );

  });