document.querySelector(".menu-opener").addEventListener("click", () => {
  const nav = document.querySelector("header nav");
  nav.classList.toggle("opened");

  const button = document.querySelector("header .menu-opener");
  button.classList.toggle("open");
});

function toggleSlider() {
  const slides = document.querySelectorAll("input[name=slider]");
  if (slides.length === 0) return;

  let current = document.querySelector("input[name=slider]:checked");
  if (!current) {
    current = document.querySelector("input[name=slider]");
    current.setAttribute("checked", true);
  }

  let id = Number(current.getAttribute("id").split("-")[1]);
  if (id + 1 <= slides.length) {
    id++;
  } else {
    id = 1;
  }

  for (let slider of slides) {
    slider.removeAttribute("checked");
  }
  document.querySelector(`#slider-${id}`).setAttribute("checked", true);
}

setInterval(toggleSlider, 5000);
