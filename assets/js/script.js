document.querySelector(".menu-opener").addEventListener("click", () => {
  const nav = document.querySelector("header nav");
  nav.classList.toggle("opened");

  const button = document.querySelector("header .menu-opener");
  button.classList.toggle("open");
});
