console.log('hello, world');
const h1 = document.querySelector('h1');

console.log('h1 element:', h1);

console.dir(h1);

const idExplanation = document.querySelector('#explanation');

console.log('Element with #explanation:', idExplanation);

console.dir(idExplanation);

const classHint = document.querySelector('.hint');

console.log('element with .hint:', classHint);

console.dir(classHint);

const ps = document.querySelectorAll('p');

console.log('all paragraph tags:', ps);

const classExampleLink = document.querySelectorAll('.example-link');

console.log('elements with .example-link:', classExampleLink);
