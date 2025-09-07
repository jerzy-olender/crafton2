document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".investments .slider");
  const slides = document.querySelectorAll(".investments .slide");
  const prevBtn = document.querySelector(".investments .slider-btn.prev");
  const nextBtn = document.querySelector(".investments .slider-btn.next");

  let index = 0;

  function showSlide(i) {
    if (i < 0) index = slides.length - 1;
    else if (i >= slides.length) index = 0;
    else index = i;

    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => showSlide(index - 1));
  nextBtn.addEventListener("click", () => showSlide(index + 1));
});
