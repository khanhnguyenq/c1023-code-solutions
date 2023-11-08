const $container = document.querySelector('.container');
const $openModal = document.querySelector('.open-button');
const $popUp = document.querySelector('.pop-up');
const $decline = document.querySelector('.decline');
const $overlay = document.querySelector('.pop');

$openModal.addEventListener('click', function () {
  $popUp.className = 'show';
  $container.className = 'container-show';
  $overlay.className = 'overlay';
});

$decline.addEventListener('click', function () {
  $popUp.className = 'pop-up';
  $container.className = 'container';
  $overlay.className = 'pop';
});
