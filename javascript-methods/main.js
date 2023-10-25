const num1 = 98;
const num2 = 70;
const num3 = 88;
const maximumValue = Math.max(num1, num2, num3);

console.log('maximumValue:', maximumValue);

const heroes = ['Ikaris', 'Makkari', 'Thena', 'Sersi'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

const library = [
  {
    title: 'Eragon',
    author: 'Christopher Paolini',
  },
  {
    title: 'Shutter Island',
    author: 'Dennis Lehane',
  },
  {
    title: "The Magician's Newphew",
    author: 'C. S. Lewis',
  },
];
const lastBook = library.pop();

console.log('lastBook value:', lastBook);

const firstBook = library.shift();

console.log('firstBook value:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library value:', library);

const fullName = 'Khanh Nguyen';
const firstAndLastName = fullName.split(' ');

console.log('firstAndLastName value:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();

console.log('sayMyName value:', sayMyName);
