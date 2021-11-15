var throttle = require('lodash.throttle');
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.elements.email;
const messageInput = feedbackForm.elements.message;
console.log(feedbackForm, emailInput, messageInput);

// Объявления объектов
let feedbackFormData = {};
const userData = {
  email: emailInput,
  message: messageInput,
};

// Объявления функций
const onFormInput = function (e) {
  feedbackFormData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormData));
};

const restoreFormInput = function () {
  if (localStorage.getItem('feedback-form-state')) {
    const parsedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (parsedFormData.email) {
      userData.email.value = parsedFormData.email;
      feedbackFormData.email = userData.email.value;
    }
    if (parsedFormData.message) {
      userData.message.value = parsedFormData.message;
      feedbackFormData.message = userData.message.value;
    }
  }
};

const onFormSubmit = function (e) {
  e.preventDefault();
  e.target.reset();
  if (feedbackFormData.email && feedbackFormData.message) {
    localStorage.removeItem('feedback-form-state');
    console.log(JSON.stringify(feedbackFormData));
    feedbackFormData = {};
  } else {
    alert('Пожалуйста, заполните все поля формы');
    restoreFormInput();
  }
};

// Слушатели и объявления функций
restoreFormInput();
feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(onFormInput, 500));
