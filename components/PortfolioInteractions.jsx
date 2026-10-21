"use client";

import { useEffect } from "react";

export default function PortfolioInteractions() {
  useEffect(() => {
    const header = document.getElementById("siteHeader");
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("navMenu");
    const progress = document.getElementById("scrollProgress");
    const backTop = document.getElementById("backTop");
    const typedEl = document.getElementById("typed");
    const yearEl = document.getElementById("year");
    const navLinks = [...document.querySelectorAll(".nav-link")];
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    const closeMenu = () => {
      nav?.classList.remove("open");
      hamburger?.setAttribute("aria-expanded", "false");
    };
    const toggleMenu = (event) => {
      event.stopPropagation();
      const opened = nav?.classList.toggle("open") ?? false;
      hamburger?.setAttribute("aria-expanded", String(opened));
    };
    hamburger?.addEventListener("click", toggleMenu);
    navLinks.forEach((link) => link.addEventListener("click", closeMenu));
    const outsideClick = (event) => {
      if (nav && hamburger && !nav.contains(event.target) && !hamburger.contains(event.target)) closeMenu();
    };
    document.addEventListener("click", outsideClick);

    const words = ["React Developer", "Frontend Engineer", "UI-focused Developer", "Web Application Builder"];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let typingTimer;
    const typeLoop = () => {
      if (!typedEl) return;
      const word = words[wordIndex];
      if (!deleting) {
        charIndex++;
        typedEl.textContent = word.slice(0, charIndex);
        if (charIndex === word.length) {
          deleting = true;
          typingTimer = setTimeout(typeLoop, 1500);
          return;
        }
      } else {
        charIndex--;
        typedEl.textContent = word.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      typingTimer = setTimeout(typeLoop, deleting ? 42 : 72);
    };
    typeLoop();

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    document.querySelectorAll("section[id]").forEach((section) => sectionObserver.observe(section));

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.width = `${pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0}%`;
      header?.classList.toggle("scrolled", scrollTop > 20);
      backTop?.classList.toggle("show", scrollTop > 550);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    backTop?.addEventListener("click", toTop);
    const onResize = () => { if (window.innerWidth > 760) closeMenu(); };
    window.addEventListener("resize", onResize);
    const smoothLinks = [...document.querySelectorAll('a[href^="#"]')];
    const smoothClick = (event) => {
      const href = event.currentTarget.getAttribute("href");
      const target = href && href.length > 1 ? document.querySelector(href) : null;
      if (!target) return;
      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight || 70) + 1;
      window.scrollTo({ top, behavior: "smooth" });
    };
    smoothLinks.forEach((anchor) => anchor.addEventListener("click", smoothClick));

    return () => {
      clearTimeout(typingTimer);
      hamburger?.removeEventListener("click", toggleMenu);
      navLinks.forEach((link) => link.removeEventListener("click", closeMenu));
      document.removeEventListener("click", outsideClick);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      backTop?.removeEventListener("click", toTop);
      smoothLinks.forEach((anchor) => anchor.removeEventListener("click", smoothClick));
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);
  return null;
}
