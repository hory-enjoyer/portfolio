import renderAboutPage from './render/renderAboutPage.js';
import renderPortPage from './render/renderPortPage.js';
import renderFaqPage from './render/renderFaqPage.js';
import './multiple/scroll.js';
import {
  onClickOnLoad,
  changeOnClickAllCatgories,
} from './multiple/categories.js';

export function onClickAboutPage() {
  renderPage(renderAboutPage, 0, 1, 2);
  navRemoveClass();
}

export function onClickPortPage() {
  renderPage(renderPortPage, 1, 0, 2);
  onClickOnLoad();
  changeOnClickAllCatgories();
  navAddClass();
}

export function onClickFaqPage() {
  renderPage(renderFaqPage, 2, 0, 1);
  navAddClass();
}

function renderPage(renderFn, id, id1, id2) {
  const elem = document.querySelector('.wrapper');
  elem.innerHTML = renderFn();
  addActiveStyleToButton(id, id1, id2);
}

window.onload = function () {
  const current = sessionStorage.getItem('current') || 'about';
  const elem = document.querySelector('.wrapper');

  switch (current) {
    case 'port':
      renderPage(renderPortPage, 1, 0, 2);
      onClickOnLoad();
      changeOnClickAllCatgories();
      navAddClass();
      break;
    case 'faq':
      renderPage(renderFaqPage, 2, 0, 1);
      navAddClass();
      break;
    default:
      renderPage(renderAboutPage, 0, 1, 2);
      break;
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
