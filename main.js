const ratingBtns = document.querySelectorAll(".btn");
const submitBtn = document.querySelector(".submit-btn");

let selectedRating = 0;

// event listener for rating buttons
ratingBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // get the rating value from the button's text content
    selectedRating = parseInt(this.textContent);
  });
});

// event listener for submit button
submitBtn.addEventListener("click", function () {
  // display the thank you state or perform other actions
  showThankYouState(selectedRating);
});

// function to show the thank you state
function showThankYouState(rating) {
  // hide the rating card
  document.querySelector(".rating-card").style.display = "none";

  // show the thank you card
  const thankYouState = document.querySelector(".thank-you-card");
  thankYouState.style.display = "block";

  // display the selected rating in the thank you state
  thankYouState.querySelector("span").textContent = rating;
}