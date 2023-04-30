window.addEventListener("DOMContentLoaded", () => {
  console.log("Te amo mi amor😊")
  const audio = document.getElementById("audio");
  audio.volume = 0.4;

  const bg = document.querySelector(".bg");
  const container = document.querySelector(".first-container");

  const button = document.querySelector(".button");

  button.addEventListener("click", () => {
    button.style.opacity = 0;
    bg.style.opacity = 0;
    container.style.opacity = 1;
    audio.play();
  });
})