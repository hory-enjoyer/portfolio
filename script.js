import renderAboutPage from './render/renderAboutPage.js';
import renderPortPage from './render/renderPortPage.js';
import renderFaqPage from './render/renderFaqPage.js';
import './multiple/scroll.js';
import {
  onClickOnLoad,
  changeOnClickAllCatgories,
} from './multiple/categories.js';

export function onClickAboutPage() {
  const elem = document.querySelector('.wrapper');
  elem.innerHTML = renderAboutPage();
  addActiveStyleToButton(0, 1, 2);
  navRemoveClass();
}

export function onClickPortPage() {
  const elem = document.querySelector('.wrapper');
  elem.innerHTML = renderPortPage();
  addActiveStyleToButton(1, 0, 2);
  onClickOnLoad();
  changeOnClickAllCatgories();
  navAddClass();
}

export function onClickFaqPage() {
  const elem = document.querySelector('.wrapper');
  elem.innerHTML = renderFaqPage();
  addActiveStyleToButton(2, 0, 1);
  navAddClass();
}

window.onload = function () {
  if (!sessionStorage.getItem('current')) {
    sessionStorage.setItem('current', 'about');
  }

  const elem = document.querySelector('.wrapper');

  if (sessionStorage.getItem('current') === 'about') {
    elem.innerHTML = renderAboutPage();
    addActiveStyleToButton(0, 1, 2);
  } else if (sessionStorage.getItem('current') === 'port') {
    elem.innerHTML = renderPortPage();
    addActiveStyleToButton(1, 0, 2);
    onClickOnLoad();
    changeOnClickAllCatgories();
    navAddClass();
  } else if (sessionStorage.getItem('current') === 'faq') {
    elem.innerHTML = renderFaqPage();
    addActiveStyleToButton(2, 0, 1);
    navAddClass();
  }
};

function addActiveStyleToButton(id, id1, id2) {
  const but = document.getElementById(id);
  const remBut1 = document.getElementById(id1);
  const remBut2 = document.getElementById(id2);
  but.classList.add('active-nav-button');
  remBut1.classList.remove('active-nav-button');
  remBut2.classList.remove('active-nav-button');
}

function navAddClass() {
  const nav = document.querySelector('.navbar');
  nav.classList.add('navbarPort');
}

function navRemoveClass() {
  const nav = document.querySelector('.navbar');
  nav.classList.remove('navbarPort');
}
