// Toggle class active hamburgerMenu
const navbarNav = document.querySelector('.navbar-nav');

// When Hamburger-menu clicked
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active searchBar
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box')

document.querySelector('#search-btn').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Click outside of an element
const hm = document.querySelector('#hamburger-menu');
const sb =document.querySelector('#search-btn');

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
