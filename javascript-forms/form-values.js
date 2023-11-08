const $contactForm = document.querySelector('#contact-form');

const messageData = {};

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  messageData.name = $contactForm['user-name'].value;
  messageData.email = $contactForm['user-email'].value;
  messageData.message = $contactForm['user-message'].value;
  console.log('Message Data:', messageData);
  $contactForm.reset();
});
