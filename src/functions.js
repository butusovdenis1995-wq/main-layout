export function showForm() {
  const feedbackForm = document.getElementById("feedback");
  const buttonFormMain = document.getElementById("statusMain");
  const buttonForm = document.getElementById("status");
  const feedbackClose = document.getElementById("close-form");
  const callForm = document.getElementById("orderCall");
  const buttonCallFormMain = document.getElementById("buttonCallFormMain");
  const buttonCallForm = document.getElementById("buttonCallForm");
  const callClose = document.getElementById("close-form-call");
  let scrollPosition = 0;
  buttonForm.addEventListener("click", function () {
    scrollPosition = window.pageYOffset;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
    feedbackForm.style.display = "flex";
  });
  buttonFormMain.addEventListener("click", function () {
    scrollPosition = window.pageYOffset;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
    feedbackForm.style.display = "flex";
  });
  feedbackClose.addEventListener("click", function () {
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("width");
    window.scrollTo(0, scrollPosition);
    feedbackForm.style.display = "none";
  });
  feedbackForm.addEventListener("click", function () {
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("width");
    window.scrollTo(0, scrollPosition);
    feedbackForm.style.display = "none";
  });

  buttonCallForm.addEventListener("click", function () {
    scrollPosition = window.pageYOffset;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
    callForm.style.display = "flex";
  });
  buttonCallFormMain.addEventListener("click", function () {
    scrollPosition = window.pageYOffset;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
    callForm.style.display = "flex";
  });
  callClose.addEventListener("click", function () {
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("width");
    window.scrollTo(0, scrollPosition);
    callForm.style.display = "none";
  });
  callForm.addEventListener("click", function () {
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("width");
    window.scrollTo(0, scrollPosition);
    callForm.style.display = "none";
  });
}
export function showAside() {
  const aside = document.getElementById("aside-placeholder");
  const burger = document.getElementById("burger");
  const asideClose = document.getElementById("aside-close");
  let scrollPosition = 0;
  burger.addEventListener("click", function () {
    aside.style.display = "block";
    aside.style.position = "absolute";
    scrollPosition = window.pageYOffset;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
  });
  asideClose.addEventListener("click", function () {
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("width");
    window.scrollTo(0, scrollPosition);
    aside.style.display = "none";
  });
  aside.addEventListener("click", function () {
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("width");
    window.scrollTo(0, scrollPosition);
    aside.style.display = "none";
  });
}
export function showAllBtn() {
  const hiddenTechButton = document.querySelector(".hidden-tech-button"); // для техники
  const hiddenTabletTechItem = document.querySelector(
    ".types-technique-list-btn-hidden-tablet"
  );
  const showTextTech = document.querySelector(".show-text-tach");
  const hideTextTech = document.querySelector(".hide-text-tech");

  const fullContent = document.querySelector(".hidden-content"); // для бренда
  const showText = document.querySelector(".show-text-brand");
  const hideText = document.querySelector(".hide-text-brand");
  const hiddenDesktop = document.querySelectorAll(".hidden-desktop"); // элементы десктопа
  const hiddenTabletDesktop = document.querySelectorAll(
    ".hidden-tablet, .hidden-desktop"
  ); // элементы десктопа и планшета
  let isExpandedBrand = false;
  let isExpandedTech = false;
  const viewWidth = window.innerWidth;

  fullContent.addEventListener("click", function () {
    isExpandedBrand = !isExpandedBrand;

    hiddenDesktop.forEach((items) => {
      if (isExpandedBrand) {
        items.style.display = "flex";
      } else {
        items.style.display = "none";
      }
    });
    if (isExpandedBrand) {
      showText.style.display = "none";
      hideText.style.display = "inline";
    } else {
      showText.style.display = "inline";
      hideText.style.display = "none";
    }
    hiddenTabletDesktop.forEach((item) => {
      if (viewWidth < 1023) {
        if (isExpandedBrand) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      }
    });
  });

  hiddenTechButton.addEventListener("click", function () {
    isExpandedTech = !isExpandedTech;

    if (viewWidth < 1023) {
      if (isExpandedTech) {
        hiddenTabletTechItem.style.display = "flex";
      } else {
        hiddenTabletTechItem.style.display = "none";
      }
    }

    if (isExpandedTech) {
      showTextTech.style.display = "none";
      hideTextTech.style.display = "inline";
    } else {
      showTextTech.style.display = "inline";
      hideTextTech.style.display = "none";
    }
  });
}
