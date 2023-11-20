function startOnboarding() {
  document.getElementById("startButton").style.display = "none";
  document.getElementById("onboarding-container").style.display = "block";
  document.getElementById("onboarding-container").style.animation =
    "fadeIn 1s ease-out";
}

function hideOnboarding() {
  document.getElementById("onboarding-container").style.display = "none";
}

let currentStep = 1;

function nextStep() {
  const currentStepElement = document.getElementById(`step${currentStep}`);
  currentStepElement.classList.remove("active");
  currentStep = Math.min(currentStep + 1, 5);
  const nextStepElement = document.getElementById(`step${currentStep}`);
  nextStepElement.classList.add("active");
}

function prevStep() {
  const currentStepElement = document.getElementById(`step${currentStep}`);
  currentStepElement.classList.remove("active");
  currentStep = Math.max(currentStep - 1, 1);
  const prevStepElement = document.getElementById(`step${currentStep}`);
  prevStepElement.classList.add("active");
}

function finishOnboarding() {
  alert(
    "Congratulations! You have completed the API Enablement onboarding process."
  );
  hideOnboarding();
}
