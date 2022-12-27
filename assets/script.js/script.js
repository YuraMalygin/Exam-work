
  let hamburger = document.querySelector('.hamburger');
  let menu = document.querySelector('.nav__collapse');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  })