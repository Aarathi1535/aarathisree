const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav__link");
const themeButton = document.getElementById("theme-button");
const darkThemeClass = "dark-theme";
const iconThemeClass = "uil-sun";

if (navToggle) {
  navToggle.addEventListener("click", () => navMenu.classList.add("show-menu"));
}
if (navClose) {
  navClose.addEventListener("click", () => navMenu.classList.remove("show-menu"));
}
navLinks.forEach((link) =>
  link.addEventListener("click", () => navMenu.classList.remove("show-menu"))
);

const skillsContent = document.querySelectorAll(".skills__content");
const skillsHeaders = document.querySelectorAll(".skills__header");
skillsHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    const current = this.parentNode;
    skillsContent.forEach((item) => item.classList.replace("skills__open", "skills__close"));
    if (current.classList.contains("skills__close")) {
      current.classList.replace("skills__close", "skills__open");
    }
  });
});

const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    if (!target) return;
    tabContents.forEach((content) => content.classList.remove("qualification__active"));
    tabs.forEach((t) => t.classList.remove("qualification__active"));
    target.classList.add("qualification__active");
    tab.classList.add("qualification__active");
  });
});

const modalViews = document.querySelectorAll(".services__modal");
const modalButtons = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");
modalButtons.forEach((button, index) => {
  button.addEventListener("click", () => modalViews[index].classList.add("active-modal"));
});
modalCloses.forEach((button) => {
  button.addEventListener("click", () =>
    modalViews.forEach((modal) => modal.classList.remove("active-modal"))
  );
});

new Swiper(".portfolio__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 28,
  centeredSlides: true,
  slidesPerView: 1,
  speed: 850,
  autoplay: {
    delay: 3300,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".portfolio .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".portfolio .swiper-button-next",
    prevEl: ".portfolio .swiper-button-prev",
  },
});

function initAchievementTicker() {
  const track = document.getElementById("achievement-track");
  if (!track) return;
  track.innerHTML += track.innerHTML;
}
initAchievementTicker();

const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 130;
    const sectionId = current.getAttribute("id");
    const activeLink = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');
    if (!activeLink) return;
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      activeLink.classList.add("active-link");
    } else {
      activeLink.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const scrollUp = document.getElementById("scroll-up");
  if (window.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
  if (window.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
});

const savedTheme = localStorage.getItem("selected-theme");
if (savedTheme) {
  document.body.classList.toggle(darkThemeClass, savedTheme === "dark");
}
if (themeButton) {
  themeButton.classList.toggle(iconThemeClass, document.body.classList.contains(darkThemeClass));
  const toggleTheme = () => {
    document.body.classList.toggle(darkThemeClass);
    themeButton.classList.toggle(iconThemeClass);
    localStorage.setItem(
      "selected-theme",
      document.body.classList.contains(darkThemeClass) ? "dark" : "light"
    );
  };
  themeButton.addEventListener("click", toggleTheme);
  themeButton.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleTheme();
    }
  });
}

function applyTiltEffect(selector, maxTilt) {
  const cards = document.querySelectorAll(selector);
  cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) * 2 - 1) * maxTilt;
      const rotateX = (1 - (y / rect.height) * 2) * maxTilt;
      card.style.transform = "perspective(900px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

applyTiltEffect(".home__content", 6);
applyTiltEffect(".services__content", 6);
applyTiltEffect(".portfolio__content", 5);
