const navSlide = () => {
  const menu = document.querySelector(".ou-nav__icon");
  const nav = document.querySelector(".ou-nav__links");

  menu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();
