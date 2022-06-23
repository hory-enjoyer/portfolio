import renderAboutPage from "./renderAboutPage.js";
import renderPortPage from "./renderPortPage.js";
import renderFaqPage from "./renderFaqPage.js";

export function onClick() {
    const elem = document.querySelector(".wrapper");
    elem.innerHTML = renderAboutPage();
    but(0);
    clearb(1);
    clearb(2);
}

export function onClick1() {
    const elem = document.querySelector(".wrapper");
    elem.innerHTML = renderPortPage();
    but(1);
    clearb(0);
    clearb(2);
    text();
}

export function onClick2() {
    const elem = document.querySelector('.wrapper');
    elem.innerHTML = renderFaqPage();
    but(2);
    clearb(0);
    clearb(1);
}

window.onload = function () {

    if (!sessionStorage.getItem('current')) {
        sessionStorage.setItem('current', 'somepage');
    }

    const elem = document.querySelector(".wrapper");

    if (sessionStorage.getItem('current') === 'somepage') {
        elem.innerHTML = renderAboutPage();
        but(0);
    } else if (sessionStorage.getItem('current') === "somepage1") {
        elem.innerHTML = renderPortPage();
        but(1);
        text('all');
    } else if (sessionStorage.getItem('current') === "somepage2") {
        elem.innerHTML = renderFaqPage();
        but(2);
    }
}

function but(id) {
    let iid = document.getElementById(id).style;
    iid.boxShadow = "15px 15px 45px 2px rgba(0, 0, 0, 0), 5px 5px 15px 2px rgba(0, 0, 0, 0.07) inset";
    iid.transform = "scale(0.95)";
    iid.border = "1px solid rgba(226, 226, 226, 0.9)";
}

function clearb(idd) {
    let id = document.getElementById(idd).style;
    id.boxShadow = "none";
    id.boxShadow = "15px 15px 40px 2px rgba(0, 0, 0, 0.12), 3px 3px 15px 2px rgba(0, 0, 0, 0) inset";
    id.transform = "scale(1)";
    id.border = "1px solid rgba(226, 226, 226, 0)";
    id.transition = "0.4s";
}

function text() {
    let el = document.getElementById('all');
    el.style.textShadow = "-3px -3px rgba(128, 128, 128, 0.6), 5px 5px 5px rgba(128, 128, 128, 0.6)";
    el.style.transform = "scale(0.95)";
    el.style.color = "rgba(255, 255, 255, 0.95)";  
}