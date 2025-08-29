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

function downloadResume(event) {
  event.preventDefault();

  // Open in new tab (view only)
  window.open("https://drive.google.com/file/d/1f2bMOf7U0BA1qzkHXACSItigRm8r3tZu/view?usp=sharing", "_blank");

  // Trigger direct download
  const link = document.createElement("a");
  link.href = "https://drive.google.com/uc?export=download&id=1f2bMOf7U0BA1qzkHXACSItigRm8r3tZu";
  link.setAttribute("download", "Sai_Suman_Maharana_Resume.pdf"); 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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