import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('form'),
  textarea: document.querySelector('textarea'),
  email: document.querySelector('[name="email"]'),
};

const saveFormValue = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

chekForm();

function onFormSubmit(event) {
  event.preventDefault();
  if (refs.textarea.value && refs.email.value) {
    console.log(localStorage.getItem('feedback-form-state'));
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  } else {
    alert('Please enter your feedback');
  }
}

function onTextareaInput(event) {
  saveFormValue[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(saveFormValue));
}

function chekForm() {
  const saveMessage = localStorage.getItem('feedback-form-state');
  const valueFormInput = JSON.parse(saveMessage);
  if (valueFormInput.message) {
    refs.textarea.value = valueFormInput.message;
  } else {
    refs.textarea.value = '';
  }

  if (valueFormInput.email) {
    refs.email.value = valueFormInput.email;
  } else {
    refs.email.value = '';
  }
}
