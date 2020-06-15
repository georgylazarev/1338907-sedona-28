var searchLink = document.querySelector(".hotel-search-link");
var pop = document.querySelector(".hotel-popup");

var searchForm = document.querySelector(".search-form");
var startDate = document.querySelector("#start-date");
var endDate = document.querySelector("#end-date");
var adultCount = document.querySelector("#adult-count");
var childrenCount = document.querySelector("#children-count");

document.addEventListener("DOMContentLoaded", () => {
    pop.classList.add("hotel-popup-hide");
  });

searchLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  pop.classList.toggle("hotel-popup-hide");
  pop.classList.toggle("hotel-popup-show");

  if (pop.classList.contains("error-message")) {
    pop.classList.remove("error-message");
  }

  try {
    storageAdult = localStorage.getItem("adultCount");
    storageChildren = localStorage.getItem("childrenCount");
  } catch (err) {
    isStorageSupport = false;
  }

  if(storageAdult || storageChildren) {
    adultCount.value = storageAdult;
    childrenCount.value = storageChildren;
  }
});

searchForm.addEventListener("submit", function(evt) {
  if (!startDate.value || !endDate.value || !adultCount.value || !childrenCount.value) {
    evt.preventDefault();
    pop.classList.add("error-message");
  }
  else {
    localStorage.setItem("adultCount", adultCount.value);
    localStorage.setItem("childrenCount", childrenCount.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (pop.classList.contains("hotel-popup-show")) {
      evt.preventDefault();
      pop.classList.remove("hotel-popup-show");
      pop.classList.add("hotel-popup-hide");
    }
    if (pop.classList.contains("error-message")) {
      pop.classList.remove("error-message");
    }
  }
});
