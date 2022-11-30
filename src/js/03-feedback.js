const form = document.querySelector('.feedback-form');
const userEmail = document.querySelector('input');
const userMessege = document.querySelector('textarea');

userEmail.addEventListener('input', onEmailInput);
userMessege.addEventListener('textarea', onUserMessage);

function onEmailInput(event) {
  console.log(event.currentTarger.value);
}
