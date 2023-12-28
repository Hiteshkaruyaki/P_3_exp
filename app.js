const toggle = document.querySelector(".nav__wrapper__toggle");
const ul = document.querySelector(".nav__wrapper__ul");

// add click event on toggle
toggle.addEventListener("click", () => {
  ul.classList.toggle("nav__active");
});

// name typewrite effect
const nameElement = document.querySelector(".header__data__contents__heading");
const nameText = "Hitesh Borse";
let start = 0;

const typeWrite = () => {
  if (start < nameText.length) {
    nameElement.innerHTML += nameText.charAt(start);
    start++;
    setTimeout(typeWrite, 300);
  }
};
typeWrite();

// open / close modal

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__wrapper__close");

// open modal
modalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// close modal
modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

// get current year
const year = document.querySelector(".year");
year.innerHTML = new Date().getFullYear();

// email script
function sendMail() {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_fyuhzss", "template_ceso9v4", params, "8ELUpqrlG1MrAXQEr")
    .then(function (res) {
      alert("Email send to Hitesh Sucessfully!");
    });
}