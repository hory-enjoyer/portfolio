function renderAboutPage() {
    sessionStorage.setItem('current', 'somepage1');
    return `
    <div class="block">
        <h1>My portfolio</h1>
        <div class="categories">
            <a>All</a>
            <a>Amba</a>
            <a>Test</a>
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