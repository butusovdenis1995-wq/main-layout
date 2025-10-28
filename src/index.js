import "./styles/index.scss";
import "./functions.js";
import asideHTML from "./tamplate/aside.html";
import headerHTML from "./tamplate/header.html";
import mainHTML from "./tamplate/main.html";
import brandHTML from "./tamplate/brand.html";
import techniqueHTML from "./tamplate/technique.html";
import pricesHTML from "./tamplate/prices.html";
import footerHTML from "./tamplate/footer.html";
import feedbackHTML from "./tamplate/feedback.html";
document.addEventListener("DOMContentLoaded", function () {
  const aside = document.getElementById("aside-placeholder");
  const header = document.getElementById("header-mob");
  const main = document.getElementById("main");
  const brand = document.getElementById("brand");
  const technique = document.getElementById("technique");
  const prices = document.getElementById("prices");
  const footer = document.getElementById("footer");
  const feedback = document.getElementById("feedback");
  if (aside) {
    aside.innerHTML = asideHTML;
  }
  if (header) {
    header.innerHTML = headerHTML;
  }
  if (main) {
    main.innerHTML = mainHTML;
  }
  if (brand) {
    brand.innerHTML = brandHTML;
  }
  if (technique) {
    technique.innerHTML = techniqueHTML;
  }
  if (prices) {
    prices.innerHTML = pricesHTML;
  }
  if (footer) {
    footer.innerHTML = footerHTML;
  }
  if (feedback) {
    feedback.innerHTML = feedbackHTML;
  }
});
