function renderFaqPage() {
    sessionStorage.setItem('current', 'faq');
    return `
    <div class="block">
        <h1>FAQ</h1>
        <div class="cards1">
            <a><img src="" alt=""><h2>What is Crypto?</h2></a>
            <a><img src="" alt=""><h2>What is WEB3?</h2></a>
            <a><img src="" alt=""><h2>About Security?</h2></a>
            <a><img src="" alt=""><h2>What is Wallet?</h2></a>
            <a><img src="" alt=""><h2>What is Trading?</h2></a>
            <a><img src="" alt=""><h2>What is ICO?</h2></a>
        </div>       
    </div>
`;
}

export default renderFaqPage; 