let a = document.getElementById("nav-link")

function hidemenu(){
    a.style.right = "-200px"
}

function openmenu(){
    a.style.right = "0"
}

import emailjs from 'emailjs-com';

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm(
    "service_id",
    "template_id",
    this,
    "public_key"
  ).then(() => {
    alert("Sent");
  });
});