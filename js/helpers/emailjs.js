import emailjs from '@emailjs/browser';
import notify from './notify.js';
emailjs.init('sKpMTvWB51yA23Cto');
export default function (e) {
  e.preventDefault();

  const clearForm = (name, email, subject, content, btn) => {
    name.value = '';
    email.value = '';
    subject.value = '';
    content.value = '';
    btn.textContent = 'send';
  };

  const name = document.querySelector('.form__input--name');
  const email = document.querySelector('.form__input--email');
  const subject = document.querySelector('.form__input--subject');
  const content = document.querySelector('.form__input--content');

  const contactForm = document.querySelector('.form');
  const contactFormBtn = contactForm.querySelector('.form__input--btn');

  contactFormBtn.textContent = 'Sending..';

  emailjs
    .send('service_3sd8mti', 'template_8pf877b', {
      name: name.value,
      email: email.value,
      subject: subject.value,
      content: content.value,
    })
    .then(
      response => {
        notify('Message sent successfully');
        console.log('SUCCESS!', response.status, response.text);
        clearForm(name, email, subject, content, contactFormBtn);
      },
      error => {
        notify('Sending message failed');
        console.log('FAILED...', error);
        clearForm(name, email, subject, content, contactFormBtn);
      }
    );
}
