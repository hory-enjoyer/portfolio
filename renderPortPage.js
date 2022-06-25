function renderAboutPage() {
    sessionStorage.setItem('current', 'port');
    return `
    <div class="block">
        <h1>My portfolio</h1>
        <div class="categories">
            <a id="all">All</a>
            <a id="amba">Amba</a>
            <a id="test">Test</a>
        </div>
        <div class="cards">
            <a href="https://google.com"><img src="/img/ava.png" alt=""><h2>Project</h2></a>
            <a><img src="/img/ava.png" alt=""><h2>Project</h2></a>
            <a><img src="/img/ava.png" alt=""><h2>Project</h2></a>
            <a><img src="/img/ava.png" alt=""><h2>Project</h2></a>
            <a><img src="/img/ava.png" alt=""><h2>Project</h2></a>
            <a><img src="/img/ava.png" alt=""><h2>Project</h2></a>
        </div>
        
    </div>
`;
}

export default renderAboutPage; 