const footer = document.querySelector(".footer-container");
console.log(footer);
shareIcon.addEventListener("click", (e) => {
  footer.classList.toggle("active");
});
