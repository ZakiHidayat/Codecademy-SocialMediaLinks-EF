var loader = document.querySelector(".loading")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}