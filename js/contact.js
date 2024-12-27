const nameInput = document.querySelector(".contact__name");
const emailInput = document.querySelector(".contact__mail");
const msgInput = document.querySelector(".contact__textarea");
const submitBtn = document.querySelector(".contact__btn--js");

showPopup = () => {
   const popup = document.querySelector(".popup");
   popup.classList.remove("hidden");
   popup.classList.add("show");
   popup.classList.add("popup-animation");
   const popupBtn = document.querySelector(".popup__btn");
   popupBtn.addEventListener("click", () => {
      location.reload(true);
   });
};
submitBtn.addEventListener("click", (e) => {
   e.preventDefault();
   checkForm();
});
