// Links
document.getElementById("battleship-github").addEventListener("click", () => {
  window.open("https://github.com/Faizan0994/Battleship", "_blank");
});

document.getElementById("battleship-live").addEventListener("click", () => {
  window.open("https://faizan0994.github.io/Battleship", "_blank");
});

document.getElementById("weather-app-github").addEventListener("click", () => {
  window.open("https://github.com/Faizan0994/weatherApp", "_blank");
});

document.getElementById("weather-app-live").addEventListener("click", () => {
  window.open("https://faizan0994.github.io/weatherApp/", "_blank");
});

document
  .getElementById("admin-dashboard-github")
  .addEventListener("click", () => {
    window.open("https://github.com/Faizan0994/TOP-admin-dashboard", "_blank");
  });

document
  .getElementById("admin-dashboard-live")
  .addEventListener("click", () => {
    window.open("https://faizan0994.github.io/TOP-admin-dashboard", "_blank");
  });

document.getElementById("sign-up-form-github").addEventListener("click", () => {
  window.open("https://github.com/Faizan0994/TOP-sign-up-form", "_blank");
});

document.getElementById("sign-up-form-live").addEventListener("click", () => {
  window.open("https://faizan0994.github.io/TOP-sign-up-form", "_blank");
});

document
  .getElementById("restaurant-page-github")
  .addEventListener("click", () => {
    window.open("https://github.com/Faizan0994/restaurant-page", "_blank");
  });

document
  .getElementById("restaurant-page-live")
  .addEventListener("click", () => {
    window.open("https://faizan0994.github.io/restaurant-page", "_blank");
  });

document.getElementById("calculator-github").addEventListener("click", () => {
  window.open("https://github.com/Faizan0994/TOP_calculator", "_blank");
});

document.getElementById("calculator-live").addEventListener("click", () => {
  window.open("https://faizan0994.github.io/TOP_calculator", "_blank");
});

// Animations
const dovePic = document.getElementById("dove-pic");
const aboutMe = document.querySelector(".about-me");
const cards = document.querySelectorAll(".card");
const footer = document.querySelector("footer");

window.addEventListener("load", () => {
  dovePic.classList.add("loaded");
  aboutMe.classList.add("loaded");
});

// intersection observer gives better performance than scroll event listeners
const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        cardObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

const footerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        footerObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

cards.forEach((card) => {
  cardObserver.observe(card);
});

footerObserver.observe(footer);
