const mainApp = document.querySelector(".app");
const mainAppThanks = document.querySelector(".app-thank-you");
const submitButton = document.querySelector(".submit");
const rateAgain = document.querySelector(".rate-again");
const rates = document.querySelectorAll(".btn-item");
const rating = document.querySelector("#rating");

// Ẩn hiện giao diện app
submitButton.addEventListener("click", () => {
  mainAppThanks.classList.remove("hidden");
  mainApp.style.display = "none";
});

rateAgain.addEventListener("click", () => {
  mainAppThanks.classList.add("hidden");
  mainApp.style.display = "block";
});

// hiển thị lượt star ở app thank you
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
