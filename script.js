onload = () => {
  // Quita la clase not-loaded para iniciar animaciones
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);

  // Audio
  const btn = document.getElementById("play");
  const audio = document.getElementById("musica");

  btn.addEventListener("click", () => {
    audio.volume = 0.4;
    audio.play();
    btn.style.display = "none";
  });
};

