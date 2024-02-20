const hamburgerBtn = document.querySelector(".hamburger-btn");
const navbarNav = document.querySelector(".navbar-nav");
const closeBtn = document.querySelector(".close-btn");

// show navbar
hamburgerBtn.addEventListener("click", () => {
  navbarNav.style.right = 0;
});

// close navbar
closeBtn.addEventListener("click", () => {
  navbarNav.style.right = "-200px";
});

window.addEventListener("click", (e) => {
  if (!navbarNav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
    navbarNav.style.right = "-200px";
    // alert("helo");
  }
});
