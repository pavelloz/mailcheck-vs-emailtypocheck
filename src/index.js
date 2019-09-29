import Mailcheck from 'mailcheck';
import { checkEmailTypos } from 'emailtypocheck/dist/emailtypocheck.js';

const input = document.querySelector('[data-input]');
const resultMailcheck = document.querySelector('[data-result="mailcheck"]');
const resultEmailtypocheck = document.querySelector('[data-result="emailtypocheck"]');

const runMailcheck = email => {
  resultMailcheck.textContent = '';
  Mailcheck.run({
    email,
    suggested: suggestion => {
      resultMailcheck.textContent = suggestion.full;
    }
  });
};

const runEmailtypocheck = email => {
  resultEmailtypocheck.textContent = '';
  try {
    resultEmailtypocheck.textContent = checkEmailTypos(email).join(', ');
  } catch(e) {};
};

input.addEventListener('keyup', e => {
  const email = event.target.value || '';

  runMailcheck(email);
  runEmailtypocheck(email);
});

const ev = new CustomEvent('keyup');
input.dispatchEvent(ev);
