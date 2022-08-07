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
    <h2>Introduction</h2>
    Greeting!<br>
    I'm a front-end developer with a focus on WEB 3. I've an experience of community after
    working for 2 years as customer supporter. I took communication skills which have allowed me to manage
    complex crypto projects.<br>
    I participate as a moderator/ ambassador/ validator in mainnets and testnets of
    such networks as cosmos, polkadot, as well as other unique blockchains.<br>
    You can see my portfolio already here.
</div>
<div class="content4">
    <h2>Navigation</h2>
    <p>In this block, we will consider the second and third tabs, for the sake of completeness.<br>

    In the second tab, you can see all the projects (well, at least the majority) that I have contributed to in one way or another. These can be investments, ambassadors, technical tasks from projects. There will be three tabs on the site: All, Ambassador, Testnet - there is no separate tab for investments, since all projects from the testnet category and which have already been released were invested by me.<br>
    
    In the third tab you can watch educational articles. As I am busy, I will publish different content here, at the moment I have chosen educational articles.</p>
</div>
    </div>
`;
}
export default renderAboutPage;