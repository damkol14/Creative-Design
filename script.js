const aboutMeBtn = document.querySelectorAll(".teamCard__aboutMeBtn");

const aboutMeEl = document.querySelectorAll(".teamCard__aboutMeText");
const aboutMeElHeading = document.querySelectorAll(".aboutMeText__heading");
const aboutMeElText = document.querySelectorAll(".aboutMeText__text");

for (let i = 0; i < aboutMeBtn.length; i++) {
  aboutMeBtn[i].addEventListener("click", (e) => {
    // rotate about BTN onclick
    if (aboutMeBtn[i].classList.contains("teamCard__aboutMeBtn--rotate")) {
      aboutMeBtn[i].classList.remove("teamCard__aboutMeBtn--rotate");
      aboutMeBtn[i].classList.add("teamCard__aboutMeBtn--rotateReverse");

      // disepear about me text on click
      aboutMeEl[i].style.animation = "";
      aboutMeElHeading[i].style.animation = "";
      aboutMeElText[i].style.animation = "";

      setTimeout(() => {
        aboutMeEl[i].style.animation = "show 0.4s ease-in reverse";
        aboutMeElHeading[i].style.animation =
          "aboutMeText__heading 0.4s ease-in reverse";
        aboutMeElText[i].style.animation =
          "aboutMeText__text 0.4s ease-in reverse";
      }, 1);
    } else {
      aboutMeBtn[i].classList.remove("teamCard__aboutMeBtn--rotateReverse");
      aboutMeBtn[i].classList.add("teamCard__aboutMeBtn--rotate");

      // showing about me text
      aboutMeEl[i].style.animation = "";
      aboutMeElHeading[i].style.animation = "";
      aboutMeElText[i].style.animation = "";
      setTimeout(() => {
        aboutMeEl[i].style.animation = "show 0.4s ease-in forwards";
        aboutMeElHeading[i].style.animation =
          "aboutMeText__heading 0.4s ease-in forwards";
        aboutMeElText[i].style.animation =
          "aboutMeText__text 0.4s ease-in forwards";
      }, 1);
    }
  });
}
