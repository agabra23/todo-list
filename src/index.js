const hamburger = document.getElementById("hamburgerMenu");
hamburger.onclick = () => {
  if (hamburger.classList.contains("open")) {
    hamburger.classList.remove("open");
  } else {
    hamburger.classList.add("open");
  }
};
