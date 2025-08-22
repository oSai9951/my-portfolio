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

    // open in new tab
    window.open("https://drive.google.com/file/d/1f0Z8dCm-sFXMQVDcL2dfdnkyIQ3E00Kh/view?usp=sharing", "_blank");

    // trigger download
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1f0Z8dCm-sFXMQVDcL2dfdnkyIQ3E00Kh";
    link.download = "Sai_Suman_Maharana_Resume.pdf"; // optional custom name
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