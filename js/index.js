const arrowDown = document.querySelector(".header__arrow")
const section = document.querySelector('section.special');

arrowDown.addEventListener('click', () => {
   const sectionPosition = section.offsetTop; // Pozycja sekcji od góry strony
   window.scrollTo({ 
      top: sectionPosition - 50, // Odejmujemy 50px
      behavior: "smooth" 
   });
});