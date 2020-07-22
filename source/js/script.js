const navigation = document.querySelector('.nav');
const navigationButton = document.querySelector('.nav__button');
const menuButton = document.querySelector('.button--menu');

const translateNavigationX = (evt) => {
  navigation.classList.toggle('nav--active');
}

const transitionInnerMenuButton = (evt) => {
  menuButton.classList.toggle('button--menu-active');
}

navigationButton.addEventListener('click', translateNavigationX);
menuButton.addEventListener('click', transitionInnerMenuButton);

