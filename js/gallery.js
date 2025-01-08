const allPhotos = document.querySelectorAll(".gallery__img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal__img");
const modalBtn = document.querySelector(".modal__btn");

const openModal = (e) => {
   modal.style.display = "block";
   const photoSrc = e.target.getAttribute("src");
   modalImg.setAttribute("src", photoSrc);
};

const closeModal = () => {
   modal.style.display = "none";
};

modalBtn.addEventListener("click", closeModal);

allPhotos.forEach((photo) => {
   photo.addEventListener("click", openModal);
});

window.addEventListener('click', e => e.target === modal ? closeModal() : false);