const burgerBtn = document.querySelector(".fa-bars");
const xBtn = document.querySelector(".fa-x");
const navMobileDropdown = document.querySelector(".nav__mobile-dropdown");


const showMobileNav = () => {
   navMobileDropdown.classList.remove("slideUp");

   burgerBtn.classList.remove("show");
   burgerBtn.classList.add("hidden");
   burgerBtn.classList.remove("showBtn");
   burgerBtn.classList.add("hideBtn");

   xBtn.classList.remove("showBtn");
   xBtn.classList.add("hideBtn");
   xBtn.classList.remove("hidden");
   xBtn.classList.add("show");

   navMobileDropdown.classList.add("slideDown");
};
const closeMobileNav = () => {
   navMobileDropdown.classList.remove("slideDown");

   xBtn.classList.remove("show");
   xBtn.classList.add("hidden");
   xBtn.classList.remove("hideBtn");
   xBtn.classList.add("showBtn");

   burgerBtn.classList.remove("hidden");
   burgerBtn.classList.add("show");
   burgerBtn.classList.remove("hideBtn");
   burgerBtn.classList.add("showBtn");

   navMobileDropdown.classList.add("slideUp");
};

const checkForm = () => {
   const inputs = [nameInput, emailInput, msgInput];
   inputs.forEach((input) => {
      if (input.value === "") {
         const label = input.previousElementSibling;
         const labelText = label.textContent.toLowerCase().slice(0, -1);
         input.placeholder = "Musisz podać " + labelText; // Zaktualizuj placehold
      }
   });
   if (nameInput.value !== "" && emailInput.value !== "" && msgInput.value !== "") {
      showPopup();
   }
};


burgerBtn.addEventListener("click", showMobileNav);
xBtn.addEventListener("click", closeMobileNav);
