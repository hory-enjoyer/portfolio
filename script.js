import renderAboutPage from "./renderAboutPage.js";
import renderPortPage from "./renderPortPage.js";
import renderFaqPage from "./renderFaqPage.js";
import allCategories from './categories/allCategories.js';
import ambaCategories from './categories/ambaCategories.js';
import testCategories from './categories/testCategories.js';

export function onClickAboutPage() {
    const elem = document.querySelector(".wrapper");
    elem.innerHTML = renderAboutPage();
    addActiveStyleToButton(0,1,2);
}

export function onClickPortPage() {
    const elem = document.querySelector(".wrapper");
    elem.innerHTML = renderPortPage();
    addActiveStyleToButton(1,0,2);
    onClickTogether();
    changeOnClickAllCatgories();
}

export function onClickFaqPage() {
    const elem = document.querySelector('.wrapper');
    elem.innerHTML = renderFaqPage();
    addActiveStyleToButton(2,0,1);
}

window.onload = function () {
    if (!sessionStorage.getItem('current')) {
        sessionStorage.setItem('current', 'about');
    }

    const elem = document.querySelector(".wrapper");

    if (sessionStorage.getItem('current') === 'about') {
        elem.innerHTML = renderAboutPage();
        addActiveStyleToButton(0,1,2);
    } else if (sessionStorage.getItem('current') === "port") {
        elem.innerHTML = renderPortPage();
        addActiveStyleToButton(1,0,2);
        onClickTogether(); 
        changeOnClickAllCatgories();

    } else if (sessionStorage.getItem('current') === "faq") {
        elem.innerHTML = renderFaqPage();
        addActiveStyleToButton(2,0,1);
    }
}

function addActiveStyleToButton(id, id1, id2) {
    const but = document.getElementById(id);
    const remBut1 = document.getElementById(id1);
    const remBut2 = document.getElementById(id2);
    but.classList.add("active-nav-button");
    remBut1.classList.remove("active-nav-button");
    remBut2.classList.remove("active-nav-button");
}

function changeOnClickAllCatgories() {
    const elem = document.querySelector(".cards");
    elem.innerHTML = allCategories();
}

function changeOnClickAmbaCatgories() {
    const elem = document.querySelector(".cards");
    elem.innerHTML = ambaCategories();
}

function changeOnClickTestCatgories() {
    const elem = document.querySelector(".cards");
    elem.innerHTML = testCategories();
}

function onClickAllCatgories(){
    const all = document.getElementById('all');
    const amba = document.getElementById('amba');
    const test = document.getElementById('test');
    all.onclick = function(){
    changeOnClickAllCatgories();
    all.classList.add("active-cat");
    amba.classList.remove("active-cat");
    test.classList.remove("active-cat");
    }

}

function onClickAmbaCatgories(){
    const all = document.getElementById('all');
    const amba = document.getElementById('amba');
    const test = document.getElementById('test');
    amba.onclick= function(){
    changeOnClickAmbaCatgories();
    amba.classList.add("active-cat");
    all.classList.remove("active-cat");
    test.classList.remove("active-cat");
    }
}

function onClickTestCatgories(){
    const all = document.getElementById('all');
    const amba = document.getElementById('amba');
    const test = document.getElementById('test');
    test.onclick= function(){
    changeOnClickTestCatgories();
    test.classList.add("active-cat");
    amba.classList.remove("active-cat");
    all.classList.remove("active-cat");
    }
}

function onClickTogether() {
    all.classList.add("active-cat");
    onClickAllCatgories();
    onClickAmbaCatgories();
    onClickTestCatgories();
}