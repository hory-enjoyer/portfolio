function renderAboutPage() {
    sessionStorage.setItem('current', 'about');
    return `
    <div class="lock">LOCK</div>

    <div class="mainblock">
    <div class="content1">
    <P>Get to Know Me</P>
    <H1>Bohdan Butenko</H1>
    <p>lock#1450</p>
    </div>
<div class="content2">
    <a target="_blank" href="https://twitter.com/l0ckck"><i class="fa-brands fa-twitter"></i></a>
    <a target="_blank" href="https://medium.com/@lockckss"><i class="fa-brands fa-medium"></i></a>
    <a target="_blank" href="https://github.com/lockck"><i class="fa-brands fa-github"></i></a>
</div>
<div class="content3">
    <h2>About me</h2>
    Greeting! I am a front-end developer with a focus on WEB3. I have an experience of community after
    working for 2 years as customer supporter I took communication skills which have allowed me to manage
    complex crypto projects. I participate as a moderator/ ambassador/ validator in mainnets and testnets of
    such networks as cosmos, polkadot, as well as other unique blockchains.
    You can see my portfolio already here.
</div>
<div class="content4">
    <h2>FAQ</h2>
    <p>The idea of this section is to make introductory articles that you can rely on at the beginning of your journey, they will be published periodically. I would be very grateful for the feedback that you can leave under my articles.
    The idea of this section is to make introductory articles that you can rely on at the beginning of your journey, they will be published periodically. I would be very grateful for the feedback that you can leave under my articles. In the second tab, you can see all my contributions, it can be investments, ambassadorship or validation.
    </p>
</div>
    </div>
`;
}
export default renderAboutPage;