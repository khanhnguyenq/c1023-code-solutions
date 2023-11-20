const $countDown = document.querySelector('.countdown-display');

const intervalID = null;
let count = 4;

function countDown() {
  count--;
  if (count > 0) {
    $countDown.textContent = count;
  } else {
    $countDown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}

setInterval(countDown, 1000);
