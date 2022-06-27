function renderAboutPage() {
    sessionStorage.setItem('current', 'port');
    return `
    <div class="block">
        <h1>My portfolio</h1>
        <div class="categories">
            <a id="all" class="cat">All</a>
            <a id="amba" class="cat">Amba</a>
            <a id="test" class="cat">Test</a>
        </div>
        <div class="cards">
        </div>
        
    </div>
`;
}

export default renderAboutPage; 