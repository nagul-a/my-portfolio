const roles = [
  "Computer Science Student @ SECE",
  "Full Stack Developer",
  "Problem Solver",
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById("typedText");

function type() {
  const current = roles[roleIndex];

  if (isDeleting) {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === current.length) {
    setTimeout(() => (isDeleting = true), 1800);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 50 : 90);
}

type();

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

function closeMenu() {
  mobileMenu.classList.remove("open");
}

const fadeEls = document.querySelectorAll(
  ".about-text, .about-stats, .skill-group, .project-card, .stat-card, .contact-inner"
);

fadeEls.forEach((el) => el.classList.add("fade-in"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

fadeEls.forEach((el) => observer.observe(el));

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color =
      link.getAttribute("href") === `#${current}` ? "var(--accent)" : "";
  });
});
