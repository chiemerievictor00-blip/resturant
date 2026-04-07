
function showModal() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

//   check if fields are complete

  if (email === "" || password === "") {
    alert("please complete your details");
    return;
  }

  document.getElementById("welcomeText").textContent = "signup successfull,";
  document.getElementById("overlay").style.display = "flex";
}

function closeModal() {
  document.getElementById("overlay").style.display = "none";
    // sends user to landing page
  window.location.href = "index.html"
}


// Dark mode Light mode

const themeToggle = document.getElementById("themeToggle");

themeToggle.onclick = function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.innerHTML = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.innerHTML = "🌙";
        localStorage.setItem("theme", "light");
    }
}

// Apply saved theme on every page
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}



document.addEventListener("DOMContentLoaded", function () {

let slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".card");
let index = 0;

function showSlide() {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide();
}

// document.querySelector(".right-arrow").onclick = nextSlide;
// document.querySelector(".left-arrow").onclick = prevSlide;

setInterval(nextSlide, 1000);

});