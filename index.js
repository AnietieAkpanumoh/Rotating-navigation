const open = document.getElementById('open');
const close = document.getElementById('close');
const mainContainer = document.querySelector('.main-container');

open.addEventListener('click', () => mainContainer.classList.add('show-nav'));

close.addEventListener('click', () => mainContainer.classList.remove('show-nav'));

