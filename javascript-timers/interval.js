const $countDown = document.querySelector('.countdown-display');

const intervalID = setInterval(countDown, 1000);

function countDown(num) {
  if (parseInt($countDown.textContent) === 1) {
    $countDown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  } else {
    num = parseInt($countDown.textContent);
    num--;
    $countDown.textContent = num;
  }
}
