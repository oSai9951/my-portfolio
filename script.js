let menu = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar");

menu.onclick = ()=>{
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

window.onscroll = ()=>{
        menu.classList.remove("bx-x");
    navbar.classList.remove("active");
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  let body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0A${message}`;

   window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=saimaharana24@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`,
    "_blank"
  );
});