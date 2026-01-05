const button = document.getElementById("startVoice");
const audio = document.getElementById("autoVoice");
const overlay = document.getElementById("voiceOverlay");

button.addEventListener("click", () => {
  audio.play();
  overlay.style.display = "none";
});
