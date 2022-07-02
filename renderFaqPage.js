function renderFaqPage() {
    sessionStorage.setItem('current', 'faq');
    return `
    <div class="block">
        <h1>FAQ</h1>
        <div class="cards1">
            <a><img src="img/ava.png" alt=""><h2>Project</h2></a>
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