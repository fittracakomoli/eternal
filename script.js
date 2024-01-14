// Hamburger Menu
const menuToggle = document.querySelector(".menu-toggle input");
const navUl = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  navUl.classList.toggle("slide");
});

// Navbar Scroll
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $("nav").addClass("active");
  } else {
    $("nav").removeClass("active");
  }
});

// Login Button
$(".btn-lgn").click(function () {
  $("#login").toggle();
});

// Cart Button
$(".btn-cart").click(function () {
  $("#shop-cart").toggle();
});

// Count
function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}

// Footer Webhost
$(document).ready(function () {
  $("body").find('img[src$="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png"]').remove();
});

// Dark Mode
const darkToggle = document.getElementById("checkBox");
const darkBody = document.body;
const textDark = document.querySelector("#pop-product h2");
const darkNav = document.querySelectorAll(".active");

darkToggle.addEventListener("click", function () {
  darkBody.classList.toggle("dark");
  textDark.classList.toggle(".dark-text");
  darkNav.classList.toggle("dark-nav");
});
