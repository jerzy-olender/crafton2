document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".investments .slider");
  const slides = document.querySelectorAll(".investments .slide");
  const prevBtn = document.querySelector(".investments .slider-btn.prev");
  const nextBtn = document.querySelector(".investments .slider-btn.next");
  const wrapper = document.querySelector(".investments .slider-wrapper");

  let index = 0;

  function showSlide(i) {
    if (i < 0) index = slides.length - 1;
    else if (i >= slides.length) index = 0;
    else index = i;

    const slideWidth = wrapper.offsetWidth; // w px
    console.log("Index:", index, "Slide width (px):", slideWidth);

    slider.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  prevBtn.addEventListener("click", () => showSlide(index - 1));
  nextBtn.addEventListener("click", () => showSlide(index + 1));

  showSlide(index);

  window.addEventListener("resize", () => {
    showSlide(index);
  });
});
