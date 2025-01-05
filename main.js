const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const steps = document.querySelectorAll(".step");
const lines = document.querySelectorAll(".line");

let currentStep = 0;

steps[currentStep].classList.add("active");

nextButton.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    lines[currentStep].classList.add("active", "animate");
    steps[currentStep + 1].classList.add("active");

    currentStep++;
  }
});

prevButton.addEventListener("click", () => {
  if (currentStep > 0) {
    lines[currentStep - 1].classList.remove("active", "animate");
    steps[currentStep].classList.remove("active");

    currentStep--;
  }
});
