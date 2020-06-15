let searchLink = document.querySelector(".hotel-search-link");
let pop = document.querySelector(".hotel-popup");

searchLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  pop.classList.toggle("hotel-popup-show");
});
