const images = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png',
];

const $back = document.querySelector('.fa-chevron-left');
const $forward = document.querySelector('.fa-chevron-right');
const $image = document.querySelector('.image');
const $cirles = document.querySelectorAll('.fa-circle');
const $dot = document.querySelector('.dot');

$forward.addEventListener('click', function () {
  const $currentImage = $image.getAttribute('src');
  const currentIndex = images.findIndex((img) => img === $currentImage);
  if (currentIndex === images.length - 1) {
    $image.setAttribute('src', images[0]);
    $cirles[0].classList.remove('fa-regular');
    $cirles[0].classList.add('fa-solid');
    $cirles[currentIndex].classList.remove('fa-solid');
    $cirles[currentIndex].classList.add('fa-regular');
  } else {
    $image.setAttribute('src', images[currentIndex + 1]);
    $cirles[currentIndex + 1].classList.remove('fa-regular');
    $cirles[currentIndex + 1].classList.add('fa-solid');
    $cirles[currentIndex].classList.remove('fa-solid');
    $cirles[currentIndex].classList.add('fa-regular');
  }
  clearInterval(intervalId);
  setTimeout(setInterval(changeImage, 3000), 3000);
});

$back.addEventListener('click', function () {
  const $currentImage = $image.getAttribute('src');
  const currentIndex = images.findIndex((img) => img === $currentImage);
  if (currentIndex - 1 < 0) {
    $image.setAttribute('src', images[images.length - 1]);
    $cirles[$cirles.length - 1].classList.remove('fa-regular');
    $cirles[$cirles.length - 1].classList.add('fa-solid');
    $cirles[0].classList.remove('fa-solid');
    $cirles[0].classList.add('fa-regular');
  } else {
    $image.setAttribute('src', images[currentIndex - 1]);
    $cirles[currentIndex - 1].classList.remove('fa-regular');
    $cirles[currentIndex - 1].classList.add('fa-solid');
    $cirles[currentIndex].classList.remove('fa-solid');
    $cirles[currentIndex].classList.add('fa-regular');
  }
  clearInterval(intervalId);
  count--;
  setTimeout(setInterval(changeImage, 3000), 3000);
});

$dot.addEventListener('click', function (event) {
  let num = 0;
  for (let i = 0; i < $cirles.length; i++) {
    $cirles[i].className = `fa-regular fa-circle margin-5 ${num}`;
    num++;
  }
  if (event.target.tagName === 'I') {
    event.target.classList.remove('fa-regular');
    event.target.classList.add('fa-solid');
  }

  console.log('event.target:', event.target);
});

let intervalId = null;
let count = 0;

function changeImage() {
  if (count > 4) {
    count = 0;
  }
  $image.setAttribute('src', images[count]);
  for (let i = 0; i < $cirles.length; i++) {
    $cirles[i].className = 'fa-regular fa-circle margin-5';
  }
  $cirles[count].classList.remove('fa-regular');
  $cirles[count].classList.add('fa-solid');
  count++;
}

intervalId = setInterval(changeImage, 3000);
