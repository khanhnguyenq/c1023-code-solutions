const $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', function (event) {
  console.log('event.target', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName.toLowerCase() === 'button') {
    const $closestItem = event.target.closest('.task-list-item');
    console.log('closest:', $closestItem);
    $closestItem.remove();
  }
});
