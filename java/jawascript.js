//toggle class active

const navbarNav = document.querySelector(".navbar-nav");

//ketika menu diklik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menutup side bar
const tigamenu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!tigamenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
