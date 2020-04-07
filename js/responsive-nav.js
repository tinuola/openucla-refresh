const navSlide = () => {
  const menu = document.querySelector(".ou-nav__icon");
  const nav = document.querySelector(".ou-nav__links");
  const navLinks = document.querySelectorAll(".ou-nav__link-item");

  // Nav Toggle
  menu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();
