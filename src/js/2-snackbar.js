import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconClose from '../img/bi_x-octagon.png';
import iconOk from '../img/bi_check2-circle.svg';

const form = document.querySelector('.form');
const submitBtn = document.querySelector('[type="submit"]');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const delayInput = document.querySelector('[name="delay"]');
  const stateInput = document.querySelector('[name="state"]:checked');

  if (!delayInput.value || !stateInput) {
    iziToast.error({
      title: 'Error',
      message: 'Please select delay and state.',
      messageColor: '#FFF',
      backgroundColor: '#EF4040',
      position: 'topRight',
      iconUrl: iconClose,
    });
    return;
  }

  const delay = Number(delayInput.value);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateInput.value === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        message: `Fulfilled promise in ${delay}ms`,
        messageColor: '#FFF',
        backgroundColor: '#59A10D',
        position: 'topRight',
        iconUrl: iconOk,
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#FFF',
        backgroundColor: '#EF4040',
        position: 'topRight',
        iconUrl: iconClose,
      });
    });
});
