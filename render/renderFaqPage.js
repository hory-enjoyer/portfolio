function renderFaqPage() {
  sessionStorage.setItem('current', 'faq');
  return `
    <div class="blockFAQ">
        <div class='wrapperText'>
        <h1 class='faq'>FAQ</h1>
        </div>
        <div class="cards1">
            <a href="https://teletype.in/@lockck/zhaxZBsU7b0" target = "_blank"><img src="https://cdn.discordapp.com/attachments/983771088330817566/993419040557113354/SAD.png" alt="Crypto"><h2>What is Crypto?</h2><p>I am often asked what kind of crypto to buy. But do they know what crypto is?<br><br> Click on card to find out!</p></a>
            <a href="https://teletype.in/@lockck/4lIfwXUYHde" target = "_blank"><img src="https://cdn.discordapp.com/attachments/983771088330817566/993445059032784957/pngwing.com_1.png" alt="Web 3.0"><h2>What is WEB 3?</h2><p>This topic generally not only affects the crypto, but why blockchain technology is so important for WEB 3.<br><br> Click on card to find out!</p></a>
            <a href="https://teletype.in/@lockck/d8J_5r2W2AA" target = "_blank"><img src="https://cdn.discordapp.com/attachments/983771088330817566/993815875184509051/pngwing.com_1.png" alt="DeFi"><h2>What is DeFi?</h2><p>DeFi is a very recent discovery for the whole crypto, but very quickly gained momentum and became an integral part of the crypto.<br><br> Click on card to find out!</p></a>
            <a href="https://teletype.in/@lockck/nbD9FZ8blIm" target = "_blank"><img src="https://cdn.discordapp.com/attachments/983771088330817566/993959759285866637/pngwing.com.png" alt="ICO"><h2>What is ICO?</h2><p>Many people hear about investing in cryptocurrencies. But what do you know about early investing?<br><br>Click on card to find out!</p></a>
            <a href="https://teletype.in/@lockck/UPubwEf7EBU" target = "_blank"><img src="https://cdn.discordapp.com/attachments/983771088330817566/993989622386393188/pngwing.com_1.png" alt="NFT"><h2>What is NFT?</h2><p>Many people hear about investing in cryptocurrencies. But what do you know about early investing?<br><br>Click on card to find out!</p></a>
        </div>       
    </div>
`;
}

export default renderFaqPage;
