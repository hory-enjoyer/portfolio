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
}       

export function onClick2() {
    const elem = document.querySelector('.wrapper');
    elem.innerHTML=renderFaqPage();
    but(2);
    clearb(0);
    clearb(1);
}

window.onload = function(){

    if(!sessionStorage.getItem('current') ){
        sessionStorage.setItem('current', 'somepage');
    }

    const elem = document.querySelector(".wrapper");

    if(sessionStorage.getItem('current') === 'somepage') {
    elem.innerHTML=renderAboutPage();
    but(0);
}
    else if(sessionStorage.getItem('current') ==="somepage1") {
    elem.innerHTML = renderPortPage();
    but(1);
}
    else if(sessionStorage.getItem('current') === "somepage2"){
    elem.innerHTML = renderFaqPage();
    but(2);
}
}

function but(id){
    document.getElementById(id).style.boxShadow = "15px 15px 45px 2px rgba(0, 0, 0, 0), 5px 5px 15px 2px rgba(0, 0, 0, 0.07) inset";
    document.getElementById(id).style.transform = "scale(0.95)";
    document.getElementById(id).style.border= "1px solid rgba(226, 226, 226, 0.9)";
}

function clearb(idd) {
    document.getElementById(idd).style.boxShadow = "none";
    document.getElementById(idd).style.boxShadow = "15px 15px 40px 2px rgba(0, 0, 0, 0.12), 3px 3px 15px 2px rgba(0, 0, 0, 0) inset";
    document.getElementById(idd).style.transform = "scale(1)";
    document.getElementById(idd).style.border = "1px solid rgba(226, 226, 226, 0)";
    document.getElementById(idd).style.transition = "0.4s";
}
