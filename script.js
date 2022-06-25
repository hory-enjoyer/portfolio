import renderAboutPage from "./renderAboutPage.js";
import renderPortPage from "./renderPortPage.js";
import renderFaqPage from "./renderFaqPage.js";

export function onClickAboutPage() {
    const elem = document.querySelector(".wrapper");
    elem.innerHTML = renderAboutPage();
    navButtonClick(0);
    clearButton(1);
    clearButton(2);
}

export function onClickPortPage() {
    const elem = document.querySelector(".wrapper");
    elem.innerHTML = renderPortPage();
    navButtonClick(1);
    clearButton(0);
    clearButton(2);
    changeButtonOfCategories('all');
    changeButtonOfCategories('amba');
    changeButtonOfCategories('test');
    changeButtonOfCategoriesAfter('all');
    changeButtonOfCategoriesAfter('amba');
    changeButtonOfCategoriesAfter('test');
    clearForAll();
    clearForAmba();
}

export function onClickFaqPage() {
    const elem = document.querySelector('.wrapper');
    elem.innerHTML = renderFaqPage();
    navButtonClick(2);
    clearButton(0);
    clearButton(1);
}

window.onload = function () {

    if (!sessionStorage.getItem('current')) {
        sessionStorage.setItem('current', 'about');
    }

    const elem = document.querySelector(".wrapper");

    if (sessionStorage.getItem('current') === 'about') {
        elem.innerHTML = renderAboutPage();
        navButtonClick(0);
    } else if (sessionStorage.getItem('current') === "port") {
        elem.innerHTML = renderPortPage();
        navButtonClick(1);
    } else if (sessionStorage.getItem('current') === "faq") {
        elem.innerHTML = renderFaqPage();
        navButtonClick(2);
    }
}

function navButtonClick(id) {
    const button = document.getElementById(id).style;
    button.boxShadow = "15px 15px 45px 2px rgba(0, 0, 0, 0), 5px 5px 15px 2px rgba(0, 0, 0, 0.07) inset";
    button.transform = "scale(0.95)";
    button.border = "1px solid rgba(226, 226, 226, 0.9)";
}

function clearButton(id) {
    const button = document.getElementById(id).style;
    button.boxShadow = "none";
    button.boxShadow = "15px 15px 40px 2px rgba(0, 0, 0, 0.12), 3px 3px 15px 2px rgba(0, 0, 0, 0) inset";
    button.transform = "scale(1)";
    button.border = "1px solid rgba(226, 226, 226, 0)";
    button.transition = "0.4s";
}

function changeButtonOfCategories(id) {
    const category = document.getElementById(id);
    const a = document.getElementById('amba');
    category.onclick = function () {
        category.style.textShadow = "-3px -3px rgba(128, 128, 128, 0.6), 5px 5px 5px rgba(128, 128, 128, 0.6)";
        category.style.transform = "scale(0.95)";
        category.style.color = "rgba(255, 255, 255, 0.95)";
        a.style.color = 'red';
    }
}



function changeButtonOfCategoriesAfter(id) {
    const category = document.getElementById(id);
    category.onclick = function () {
        category.style.textShadow = "-3px -3px rgba(128, 128, 128, 0.6), 5px 5px 5px rgba(128, 128, 128, 0.6)";
        category.style.transform = "scale(0.95)";
        category.style.color = "rgba(255, 255, 255, 0.95)";
    }
}


setTimeout(() => {
    if (sessionStorage.getItem('current') === "port") {
        changeButtonOfCategoriesAfter('all');
        changeButtonOfCategoriesAfter('amba');
        changeButtonOfCategoriesAfter('test');
        clearForAll();
        clearForAmba();
        clearForTest();
        }
}, 0);

// function clearForAll() {
//     const a = document.getElementById('all');
//     const b = document.getElementById('amba');
//     const c = document.getElementById('test');
//     a.onclick = function() {
//         b.style.textShadow = "-1px -1px rgba(128, 128, 128, 0.2), 11px 11px 33px rgba(0, 0, 0, 0.25)";
//         b.style.transform = "scale(1)";
//         b.style.color = "rgb(200, 200, 200)";
//         b.classList.add('hover');

//         c.style.textShadow = "-1px -1px rgba(128, 128, 128, 0.2), 11px 11px 33px rgba(0, 0, 0, 0.25)";
//         c.style.transform = "scale(1)";
//         c.style.color = "rgb(200, 200, 200)";
//         c.classList.add('hover');
//     }
// }

// function clearForAmba() {
//     const a = document.getElementById('all');
//     const b = document.getElementById('amba');
//     const c = document.getElementById('test');
//     b.onclick = function() {
//         a.style.textShadow = "-1px -1px rgba(128, 128, 128, 0.2), 11px 11px 33px rgba(0, 0, 0, 0.25)";
//         a.style.transform = "scale(1)";
//         a.style.color = "rgb(200, 200, 200)";
//         b.classList.add('hover');

//         c.style.textShadow = "-1px -1px rgba(128, 128, 128, 0.2), 11px 11px 33px rgba(0, 0, 0, 0.25)";
//         c.style.transform = "scale(1)";
//         c.style.color = "rgb(200, 200, 200)";
//         c.classList.add('hover');
//     }
// }

// function clearForTest() {
//     const a = document.getElementById('all');
//     const b = document.getElementById('amba');
//     const c = document.getElementById('test');
//     c.onclick = function() {
//         a.style.textShadow = "-1px -1px rgba(128, 128, 128, 0.2), 11px 11px 33px rgba(0, 0, 0, 0.25)";
//         a.style.transform = "scale(1)";
//         a.style.color = "rgb(200, 200, 200)";
//         b.classList.add('hover');

//         b.style.textShadow = "-1px -1px rgba(128, 128, 128, 0.2), 11px 11px 33px rgba(0, 0, 0, 0.25)";
//         b.style.transform = "scale(1)";
//         b.style.color = "rgb(200, 200, 200)";
//         b.classList.add('hover');
//     }
// }



