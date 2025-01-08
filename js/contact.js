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

const checkForm = () => {
   const inputs = [nameInput, emailInput, msgInput];

   inputs.forEach((input) => {
      if (input.value === "") {
         const label = input.previousElementSibling;
         const labelText = label.textContent.toLowerCase().slice(0, -1);
         
         input.placeholder = "Musisz podać " + labelText; // Zaktualizuj placeholder
         input.classList.add('error'); // Dodaj klasę błędu, aby zmienić styl
      } else {
         input.classList.remove('error'); // Usuń klasę błędu, jeśli pole jest wypełnione
      }
   });

   // Jeśli wszystkie pola są wypełnione, pokaż popup
   if (nameInput.value !== "" && emailInput.value !== "" && msgInput.value !== "") {
      showPopup();
   }
};



submitBtn.addEventListener("click", (e) => {
   e.preventDefault();
   checkForm();
});
