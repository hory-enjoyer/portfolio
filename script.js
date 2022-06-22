import renderAboutPage from "./renderAboutPage.js";
import renderPortPage from "./renderPortPage.js";
import renderFaqPage from "./renderFaqPage.js";

export function onClick() {
    const elem = document.querySelector(".wrapper");
    elem.innerHTML = renderPortPage();
}       

export function onClick1() {
    const elem = document.querySelector(".wrapper");
    elem.innerHTML = renderAboutPage("");
}

export function onClick2() {
    const elem = document.querySelector('.wrapper');
    elem.innerHTML=renderFaqPage();
}




