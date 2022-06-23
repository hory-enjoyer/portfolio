function renderAboutPage() {
    sessionStorage.setItem('current', 'somepage');
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
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, earum quos? Blanditiis laboriosam quod,
    accusamus beatae impedit, quis iure placeat modi voluptate atque, voluptates odit doloremque dolore
    nostrum nisi necessitatibus corporis rerum sint praesentium ipsum qui? Incidunt soluta dicta cupiditate
    repellendus dolorum accusamus, adipisci et enim ad ut voluptates accusantium ullam qui nostrum delectus
    fugit non vero at explicabo error iusto veniam. Nostrum, voluptate.
</div>
<div class="content4">
    <h2>FAQ</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quia voluptatem dicta, vel saepe
        dignissimos, repudiandae sed consequatur eligendi harum impedit dolorum natus explicabo repellat
        nesciunt commodi cum architecto magni? Ad ducimus doloribus nesciunt! Vero, commodi corporis ducimus
        alias iste culpa labore itaque officiis obcaecati. Eaque eum, officia velit nobis blanditiis et!
        Quidem non excepturi placeat totam quasi ratione magnam minima velit recusandae ea!
    </p>
</div>
    </div>
`;
}
export default renderAboutPage;