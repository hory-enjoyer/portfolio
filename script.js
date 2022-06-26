import renderAboutPage from "./renderAboutPage.js";
import renderPortPage from "./renderPortPage.js";
import renderFaqPage from "./renderFaqPage.js";

export function onClickAboutPage() {
    const elem = document.querySelector(".wrapper");
    elem.innerHTML = renderAboutPage();
    clearButton(1);
    clearButton(2);
    isHoverTrue(1);
    isHoverTrue(2);
    navButtonClick(0);
}

export function onClickPortPage() {
    const elem = document.querySelector(".wrapper");
    elem.innerHTML = renderPortPage();
    clearButton(0);
    clearButton(2);
    isHoverTrue(0);
    isHoverTrue(2);
    navButtonClick(1);
    changeButtonOfCategories('all');
    changeButtonOfCategories('amba');
    changeButtonOfCategories('test');
    changeButtonOfCategoriesAfter('all');
    changeButtonOfCategoriesAfter('amba');
    changeButtonOfCategoriesAfter('test');
}

export function onClickFaqPage() {
    const elem = document.querySelector('.wrapper');
    elem.innerHTML = renderFaqPage();
    clearButton(0);
    clearButton(1);
    isHoverTrue(0);
    isHoverTrue(1);
    navButtonClick(2);
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
    button.transition = "0.4s";
}

function clearButton(id) {
    const button = document.getElementById(id).style;
    button.boxShadow = "none";
    button.boxShadow = "15px 15px 40px 2px rgba(0, 0, 0, 0.12), 3px 3px 15px 2px rgba(0, 0, 0, 0) inset";
    button.transform = "scale(1)";
    button.border = "1px solid rgba(226, 226, 226, 0)";
    button.transition = "0.4s";
}

function isHoverTrue(id) {
    const el = document.getElementById(id);
    el.addEventListener('mouseenter', e => {
        el.style.boxShadow = '15px 15px 45px 2px rgba(0, 0, 0, 0), 5px 5px 15px 2px rgba(0, 0, 0, 0.07) inset';
        el.style.transform = 'scale(0.95)';
        el.style.border = '1px solid rgba(226, 226, 226, 0.9)';
});
    el.addEventListener('mouseleave', e => {
    el.style.boxShadow = '15px 15px 40px 2px rgba(0, 0, 0, 0.12), 3px 3px 15px 2px rgba(0, 0, 0, 0) inset';
    el.style.border = '1px solid rgba(226, 226, 226, 0)';
    el.style.transition = '0.4s';
    el.style.transform = 'scale(1)';
});

}
function changeButtonOfCategories(id) {
    const category = document.getElementById(id);
    category.onclick = function () {
        category.style.textShadow = "-3px -3px rgba(128, 128, 128, 0.6), 5px 5px 5px rgba(128, 128, 128, 0.6)";
        category.style.transform = "scale(0.95)";
        category.style.color = "rgba(255, 255, 255, 0.95)";
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
        }
}, 0);

// function general(){
//     if(onClickAboutPage) {
//         isHoverTrue(1);
//         isHoverTrue(2);
//         clearButton(1);
//         clearButton(2);
//         navButtonClick(0);
//     }
// }