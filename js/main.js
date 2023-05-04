// burger-menu
let menu = document.querySelector("#menu__icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("active");
};

// закрытие бургера при скроле
window.onscroll = () => {
  navbar.classList.remove("active");
};

// darkmode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
}

// scrool

const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 2000,
  reset: true,
});

sr.reveal(".home, .home__img, .about__img, .about__text, .box, .connect__text, .btn, .contact__box",{interval:200});
