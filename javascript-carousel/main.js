// const gallery = [
//   'images/001.png',
//   'images/004.png',
//   'images/007.png',
//   'images/025.png',
//   'images/039.png',
// ];

// const $back = document.querySelector('.fa-chevron-left');
// const $forward = document.querySelector('.fa-chevron-right');
// const $image = document.querySelector('.image');
// const $circles = document.querySelectorAll('.fa-circle');
// const $dot = document.querySelector('.dot');
// const $gallery = document.querySelectorAll('.image')
// const $zero = document.querySelector('.zero')
// const $one = document.querySelector('.one');
// const $two = document.querySelector('.two');
// const $three = document.querySelector('.three');
// const $four = document.querySelector('.four');

// console.log('$gallery:', $gallery)

// let currentIndex = 0;
// const intervalId = null;

// function changeImage () {
//   if (currentIndex > 4) {
//     currentIndex = 0;
//   }
//   for (let i = 0; i < $gallery.length; i++) {

//   }
//   changeDot()
// };

// function changeDot () {
//   for (let i = 0; i < $circles.length; i++) {
//     $circles[i].setAttribute('class', 'fa-regular fa-circle margin-5');
//   };
//   $circles[currentIndex].setAttribute('class', 'fa-solid fa-circle margin-5');
// };

// setInterval(changeImage, 3000);

// $forward.addEventListener('click', function () {
//   const $currentImage = $image.getAttribute('src');
//   const currentIndex = images.findIndex((img) => img === $currentImage);
//   if (currentIndex === images.length - 1) {
//     $image.setAttribute('src', images[0]);
//     $cirles[0].classList.remove('fa-regular');
//     $cirles[0].classList.add('fa-solid');
//     $cirles[currentIndex].classList.remove('fa-solid');
//     $cirles[currentIndex].classList.add('fa-regular');
//   } else {
//     $image.setAttribute('src', images[currentIndex + 1]);
//     $cirles[currentIndex + 1].classList.remove('fa-regular');
//     $cirles[currentIndex + 1].classList.add('fa-solid');
//     $cirles[currentIndex].classList.remove('fa-solid');
//     $cirles[currentIndex].classList.add('fa-regular');
//   }
//   clearInterval(intervalId);
//   setTimeout(setInterval(changeImage, 3000));
// });

// $back.addEventListener('click', function () {
//   clearInterval(intervalId);
//   const $currentImage = $image.getAttribute('src');
//   const currentIndex = images.findIndex((img) => img === $currentImage);
//   if (currentIndex - 1 < 0) {
//     $image.setAttribute('src', images[images.length - 1]);
//     $cirles[$cirles.length - 1].classList.remove('fa-regular');
//     $cirles[$cirles.length - 1].classList.add('fa-solid');
//     $cirles[0].classList.remove('fa-solid');
//     $cirles[0].classList.add('fa-regular');
//   } else {
//     $image.setAttribute('src', images[currentIndex - 1]);
//     $cirles[currentIndex - 1].classList.remove('fa-regular');
//     $cirles[currentIndex - 1].classList.add('fa-solid');
//     $cirles[currentIndex].classList.remove('fa-solid');
//     $cirles[currentIndex].classList.add('fa-regular');
//   }
//   count--;
//   setTimeout(setInterval(changeImage, 3000));
// });

// $dot.addEventListener('click', function (event) {
//   for (let i = 0; i < $cirles.length; i++) {
//     $cirles[i].className = `fa-regular fa-circle margin-5`;
//   }
//   if (event.target.tagName === 'I') {
//     event.target.classList.remove('fa-regular');
//     event.target.classList.add('fa-solid');
//   }
// });

// let count = 0;

// $zero.addEventListener('click', function () {
//   $image.setAttribute('src', images[0]);
//   count = 0;
//   clearInterval(intervalId);
//   setTimeout(setInterval(changeImage, 3000), 3000);
// });

// $one.addEventListener('click', function () {
//   $image.setAttribute('src', images[1]);
//   count = 1;
//   clearInterval(intervalId);
//   setTimeout(setInterval(changeImage, 3000), 3000);
// });

// $two.addEventListener('click', function () {
//   $image.setAttribute('src', images[2]);
//   count = 2;
//   clearInterval(intervalId);
//   setTimeout(setInterval(changeImage, 3000), 3000);
// });

// $three.addEventListener('click', function () {
//   $image.setAttribute('src', images[3]);
//   count = 3;
//   clearInterval(intervalId);
//   setTimeout(setInterval(changeImage, 3000), 3000);
// });

// $four.addEventListener('click', function () {
//   $image.setAttribute('src', images[4]);
//   count = 4;
//   clearInterval(intervalId);
//   setTimeout(setInterval(changeImage, 3000), 3000);
// });

// let intervalId = null;

// function changeImage() {
//   if (count > 4) {
//     count = 0;
//   }
//   $image.setAttribute('src', images[count]);
//   for (let i = 0; i < $circles.length; i++) {
//     $circles[i].className = 'fa-regular fa-circle margin-5';
//   }
//   $circles[count].classList.remove('fa-regular');
//   $circles[count].classList.add('fa-solid');
//   count++;
// }

// intervalId = setInterval(changeImage, 3000);
