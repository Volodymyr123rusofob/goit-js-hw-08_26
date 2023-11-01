import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('form'),
  textarea: document.querySelector('textarea'),
  email: document.querySelector('[name="email"]'),
};

let saveFormValue = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

chekForm();

function onFormSubmit(event) {
  event.preventDefault();
  if (refs.textarea.value && refs.email.value) {
    console.log(localStorage.getItem('feedback-form-state'));
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    saveFormValue = {};
  } else {
    alert('Please enter your feedback');
  }
}

function onTextareaInput(event) {
  const formState = {
    message: refs.textarea.value,
    email: refs.email.value,
  };
  saveFormValue[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}

function chekForm() {
  const valueFormInput = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (valueFormInput) {
    refs.textarea.value = valueFormInput.message || '';
    refs.email.value = valueFormInput.email || '';
  }
}
