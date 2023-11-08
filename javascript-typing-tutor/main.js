const $characters = document.querySelectorAll('span');
const $keystrokes = document.querySelector('.keystrokes');
const $judge = document.querySelector('.judge');
const $accuracy = document.querySelector('.accuracy');
const $rety = document.querySelector('.play');

console.log('characters array:', $characters);

console.log('first character:', $characters[0].textContent);

let keyDown;
let count = 0;
let numberOfPress = 0;

document.addEventListener('keydown', function (event) {
  numberOfPress++;
  keyDown = event.key;
  if (keyDown === $characters[count].textContent) {
    $characters[count].classList = 'correct';
    count++;
    $characters[count].classList = 'underlined';
  } else {
    $characters[count].classList = 'incorrect';
  }
  $keystrokes.textContent = `Keystrokes ${numberOfPress}`;
  $accuracy.textContent = `Your Accuracy is ${Math.ceil(
    (count / numberOfPress) * 100
  )}%!`;
  if (count === 29) {
    $judge.className = 'judge';
    $rety.className = 'retry';
  } else {
    $judge.className = 'judge hidden';
    $rety.className = 'hidden';
  }
});
