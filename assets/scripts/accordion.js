"use strict";

const question = document.getElementsByClassName("question");
const answer = document.getElementsByClassName("answer");
const icon = document.getElementsByClassName("icon");

answer[0].style.display = "none";
icon[0].src = "assets/images/icon-plus.svg";
function show0() {
  if (answer[0].style.display == "none") {
    answer[0].style.display = "block";
    icon[0].src = "assets/images/icon-minus.svg";
  } else {
    answer[0].style.display = "none";
    icon[0].src = "assets/images/icon-plus.svg";
  }
}
question[0].tabIndex = "1";
question[0].addEventListener("click", show0);
question[0].addEventListener("keydown", show0);

answer[1].style.display = "none";
icon[1].src = "assets/images/icon-plus.svg";
function show1() {
  if (answer[1].style.display == "none") {
    answer[1].style.display = "block";
    icon[1].src = "assets/images/icon-minus.svg";
  } else {
    answer[1].style.display = "none";
    icon[1].src = "assets/images/icon-plus.svg";
  }
}
question[1].tabIndex = "2";
question[1].addEventListener("click", show1);
question[1].addEventListener("keydown", show1);

answer[2].style.display = "none";
icon[2].src = "assets/images/icon-plus.svg";
function show2() {
  if (answer[2].style.display == "none") {
    answer[2].style.display = "block";
    icon[2].src = "assets/images/icon-minus.svg";
  } else {
    answer[2].style.display = "none";
    icon[2].src = "assets/images/icon-plus.svg";
  }
}
question[2].tabIndex = "3";
question[2].addEventListener("click", show2);
question[2].addEventListener("keydown", show2);

answer[3].style.display = "none";
icon[3].src = "assets/images/icon-plus.svg";
function show3() {
  if (answer[3].style.display == "none") {
    answer[3].style.display = "block";
    icon[3].src = "assets/images/icon-minus.svg";
  } else {
    answer[3].style.display = "none";
    icon[3].src = "assets/images/icon-plus.svg";
  }
}
question[3].tabIndex = "4";
question[3].addEventListener("click", show3);
question[3].addEventListener("keydown", show3);
