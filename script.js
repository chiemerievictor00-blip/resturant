// Relocate windows to signup page

  // document.addEventListener("DOMContentLoaded", function () {
  //   window.location.href = "signup.html";
  // });
  


// signup scripting

function successFull() {
  // Get user input
  let firstName = document.getElementById("firstName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Check if fields are filled
  if (firstName === "" || email === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  document.getElementById("welcomeText").textContent =
    "Successfully signed up.";
  document.getElementById("overlay").style.display = "flex";
}

function closeModal() {
  document.getElementById("overlay").style.display = "none";
  window.location.href = "index.html";
}




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

setInterval(nextSlide, 2000);

});

