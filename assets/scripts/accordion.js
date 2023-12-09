"use strict";

const question = document.getElementsByClassName("question");
const answer = document.getElementsByClassName("answer");
const icon = document.getElementsByClassName("icon");

question[0].addEventListener("click", function () {
  if (answer[0].style.display == "none") {
    answer[0].style.display = "block";
    icon[0].src = "assets/images/icon-minus.svg";
  } else {
    answer[0].style.display = "none";
    icon[0].src = "assets/images/icon-plus.svg";
  }
});

question[1].addEventListener("click", function () {
  if (answer[1].style.display == "none") {
    answer[1].style.display = "block";
    icon[1].src = "assets/images/icon-minus.svg";
  } else {
    answer[1].style.display = "none";
    icon[1].src = "assets/images/icon-plus.svg";
  }
});

question[2].addEventListener("click", function () {
  if (answer[2].style.display == "none") {
    answer[2].style.display = "block";
    icon[2].src = "assets/images/icon-minus.svg";
  } else {
    answer[2].style.display = "none";
    icon[2].src = "assets/images/icon-plus.svg";
  }
});

question[3].addEventListener("click", function () {
  if (answer[3].style.display == "none") {
    answer[3].style.display = "block";
    icon[3].src = "assets/images/icon-minus.svg";
  } else {
    answer[3].style.display = "none";
    icon[3].src = "assets/images/icon-plus.svg";
  }
});

