/* Menu toggle */
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navMenu');
hamburger.addEventListener("click", () => {
  navMenu.style.display =
    navMenu.style.display === "flex" ? "none" : "flex";
});

/* Typed effect (simple) */
const typedEl = document.getElementById('typed');
const words = ['Frontend Engineer','React Developer','UI/UX Design'];
let idx = 0, charIdx = 0, forward = true;
function typeLoop(){
  const current = words[idx];
  if(forward){
    charIdx++;
    typedEl.textContent = current.slice(0,charIdx);
    if(charIdx === current.length){ forward=false; setTimeout(typeLoop,1200); return; }
  } else {
    charIdx--;
    typedEl.textContent = current.slice(0,charIdx);
    if(charIdx === 0){ forward=true; idx = (idx+1)%words.length; }
  }
  setTimeout(typeLoop, 80);
}
if(typedEl) typeLoop();

/* Animate skill bars when in viewport */
function animateProgress(){
  const els = document.querySelectorAll('.progress');
  els.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 80){
      const value = el.getAttribute('data-value') || 80;
      const bar = el.querySelector('.progress-bar');
      bar.style.width = value + '%';
    }
  });
}
window.addEventListener('scroll', animateProgress);
window.addEventListener('load', animateProgress);

// Navigation active on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav a');

function setActiveNav() {
  let scrollPos = window.scrollY + 100; // 100px offset for header
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);

