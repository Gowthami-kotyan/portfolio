const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".topbar a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.style.color = link.getAttribute("href") === `#${entry.target.id}`
          ? "#c16cff"
          : "";
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));
const texts = [
  "Computer Science Engineer",
  "Full Stack Developer",
  "GenAi Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const typingText = document.getElementById("typing-text");
  const currentText = texts[textIndex];

  if (!deleting) {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();