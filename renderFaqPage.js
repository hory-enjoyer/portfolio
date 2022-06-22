function renderFaqPage() {
    localStorage.setItem('current', 'somepage2');

    window.onload = function(){
    if(localStorage.getItem('current') === 'somepage2') renderFaqPage();
    }

    return `
    <div class="block">
        <h1>FAQ</h1>
        <div class="cards">
            <a><img src="/img/ava.png" alt=""><h2>Project</h2></a>
            <a><img src="/img/ava.png" alt=""><h2>Project</h2></a>
            <a><img src="/img/ava.png" alt=""><h2>Project</h2></a>
            <a><img src="/img/ava.png" alt=""><h2>Project</h2></a>
            <a><img src="/img/ava.png" alt=""><h2>Project</h2></a>
            <a><img src="/img/ava.png" alt=""><h2>Project</h2></a>
        </div>
        
    </div>
`;
}

export default renderFaqPage; 