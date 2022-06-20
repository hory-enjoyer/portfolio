import renderAboutPage from "./renderAboutPage.js";
import renderPortPage from "./renderPortPage.js";

export function onClick() {
    const elem = document.querySelector(".main");
    elem.innerHTML = renderPortPage();
}       

export function onClick1() {
    const elem = document.querySelector(".main");
    elem.innerHTML = renderAboutPage("call me Lock");
}




