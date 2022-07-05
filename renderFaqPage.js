function renderFaqPage() {
    sessionStorage.setItem('current', 'faq');
    return `
    <div class="block">
        <h1>FAQ</h1>
        <div class="cards1">
            <a href="https://teletype.in/@lockck/zhaxZBsU7b0" target = "_blank"><img src="https://cdn.discordapp.com/attachments/983771088330817566/993419040557113354/SAD.png" alt=""><h2>What is Crypto?</h2><p>I am often asked what kind of crypto to buy. But do they know what crypto is?<br> Ckick on card to find out!</p></a>
            <a href="https://teletype.in/@lockck/4lIfwXUYHde" target = "_blank"><img src="https://cdn.discordapp.com/attachments/983771088330817566/993445059032784957/pngwing.com_1.png" alt=""><h2>What is WEB 3?</h2><p>This topic generally not only affects the crypto, but why blockchain technology is so important for WEB 3.<br> Ckick on card to find out!</p></a>
            <a><img src="" alt=""><h2>About Security?</h2></a>
            <a><img src="" alt=""><h2>What is Wallet?</h2></a>
            <a><img src="" alt=""><h2>What is Trading?</h2></a>
            <a><img src="" alt=""><h2>What is ICO?</h2></a>
        </div>       
    </div>
`;
}

export default renderFaqPage; 