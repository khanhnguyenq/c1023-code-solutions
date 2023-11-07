let count = 0;

const $body = document.querySelector('.light-bulb-off');
const $bulb = document.querySelector('.light-bulb');

$bulb.addEventListener('click', function () {
  count++;
  if (count % 2 === 0) {
    $body.className = 'container light-bulb-on';
    $bulb.className = 'light-bulb circle-on';
  } else {
    $body.className = 'container light-bulb-off';
    $bulb.className = 'light-bulb circle-off';
  }
});
