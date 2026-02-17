const menu = document.getElementById("menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Contact Form Validation
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const text = document.getElementById("message").value;

  if(name && email && text) {
    message.style.color = "#a855f7";
    message.textContent = "Message sent successfully!";
    form.reset();
  } else {
    message.style.color = "red";
    message.textContent = "Please fill all fields.";
  }
});
