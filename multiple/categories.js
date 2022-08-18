import { data } from '../data/data.js';
import { ambaArr } from '../data/dataAbma.js';
import { testArr } from '../data/dataTestnets.js';
import { renderData } from '../categories/generateCards.js';

function onClickAllCatgories() {
  const all = document.getElementById('all');
  const amba = document.getElementById('amba');
  const test = document.getElementById('test');
  all.onclick = function () {
    changeOnClickAllCatgories();
    all.classList.add('active-cat');
    amba.classList.remove('active-cat');
    test.classList.remove('active-cat');
  };
}

function onClickAmbaCatgories() {
  const all = document.getElementById('all');
  const amba = document.getElementById('amba');
  const test = document.getElementById('test');
  amba.onclick = function () {
    changeOnClickAmbaCatgories();
    amba.classList.add('active-cat');
    all.classList.remove('active-cat');
    test.classList.remove('active-cat');
  };
  const block = document.getElementById('blockSize');
  block.style.width = '100px';
}

function onClickTestCatgories() {
  const all = document.getElementById('all');
  const amba = document.getElementById('amba');
  const test = document.getElementById('test');
  test.onclick = function () {
    changeOnClickTestCatgories();
    test.classList.add('active-cat');
    amba.classList.remove('active-cat');
    all.classList.remove('active-cat');
  };
}

export function onClickOnLoad() {
  all.classList.add('active-cat');
  onClickAllCatgories();
  onClickAmbaCatgories();
  onClickTestCatgories();
}

export function changeOnClickAllCatgories() {
  renderData(data);
  calculate(data);
}

export function changeOnClickAmbaCatgories() {
  renderData(ambaArr);
  calculate(ambaArr);
}

export function changeOnClickTestCatgories() {
  renderData(testArr);
  calculate(testArr);
}

export function calculate(data) {
  const wrapper = document.getElementById('ident');
  const block = document.getElementById('blockSize');
  block.style.width = data.length * 190 + 'px';
  if (data.length < 4) {
    wrapper.classList.add('wrapperBlock');
  } else {
    wrapper.classList.remove('wrapperBlock');
  }
}
