
import throttle from "lodash.throttle";

const feedbackForm = document.querySelector(".feedback-form");
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

feedbackForm.addEventListener(
  "input",
  throttle(() => {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  }, 500)
);

document.addEventListener("DOMContentLoaded", () => {
  const storedData = localStorage.getItem("feedback-form-state");
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;
  }
});

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.removeItem("feedback-form-state");

  console.log(formData);
});
