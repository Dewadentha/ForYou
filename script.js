const startScreen = document.getElementById("startScreen");
const music = document.getElementById("bgm");

startScreen.addEventListener("click", () => {
  music.play();
  startScreen.style.display = "none";
});
