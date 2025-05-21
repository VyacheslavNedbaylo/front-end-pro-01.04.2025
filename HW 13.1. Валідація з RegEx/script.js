document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nameInput = form.querySelector("input[name='name']");
  const messageInput = form.querySelector("textarea[name='message']");
  const phoneInput = form.querySelector("input[name='phone']");
  const emailInput = form.querySelector("input[name='e-mail']");
  const submitButton = form.querySelector("button[type='submit']");

  function showError(input, message) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains("error-message")) {
      error = document.createElement("div");
      error.classList.add("error-message");
      error.style.color = "red";
      error.style.fontSize = "0.9em";
      input.parentNode.appendChild(error);
    }
    error.textContent = message;
  }
  function clearError(input) {
    const error = input.parentNode.querySelector(".error-message");
    if (error) {
      error.remove();
    }
  }
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    let isValid = true;
    const nameRegex = /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s'-]+$/;
    if (!nameInput.value.trim()) {
      showError(nameInput, "Name is required!");
      isValid = false;
    } else if (!nameRegex.test(nameInput.value.trim())) {
      showError(nameInput, "Name must contain only letters!");
      isValid = false;
    } else {
      clearError(nameInput);
    }
    if (messageInput.value.trim().length < 5) {
      showError(messageInput, "Message must be at least 5 characters!");
      isValid = false;
    } else {
      clearError(messageInput);
    }
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneInput.value.trim()) {
      showError(phoneInput, "Phone number is required!");
      isValid = false;
    } else if (!phoneRegex.test(phoneInput.value.trim())) {
      showError(
        phoneInput,
        "Phone number must start with +380 and have 9 digits!"
      );
      isValid = false;
    } else {
      clearError(phoneInput);
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      showError(emailInput, "Email is required!");
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, "Email must be valid (contain @ and .) !");
      isValid = false;
    } else {
      clearError(emailInput);
    }
    if (isValid) {
      const data = {
        name: nameInput.value.trim(),
        message: messageInput.value.trim(),
        phone: phoneInput.value.trim(),
        email: emailInput.value.trim(),
      };
      console.log("Form Data:", data);
      form.reset();
    }
  });
});
