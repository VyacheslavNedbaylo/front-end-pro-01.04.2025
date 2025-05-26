const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
];
let currentIndex = 0;
const slideImage = document.getElementById("slideImage");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.getElementById("dotsContainer");
function updateSlider() {
  slideImage.src = images[currentIndex];
  prevBtn.style.display = currentIndex === 0 ? "none" : "inline-block";
  nextBtn.style.display =
    currentIndex === images.length - 1 ? "none" : "inline-block";
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}
function createDots() {
  images.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  });
}
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});
nextBtn.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateSlider();
  }
});
createDots();
updateSlider();
