const feedbackForm = document.getElementById("feedback");
const buttonForm = document.getElementById("status");
console.log(feedbackForm);
console.log(buttonForm);
buttonForm.addEventListener("click", function () {
  feedbackForm.forEach((item) => {
    item.style.display = "flex";
  });
});
