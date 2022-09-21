function renderAboutPage() {
  sessionStorage.setItem('current', 'port');
  return `
    <div id='ident' class='null'>
        <div class='wrapperText'>
            <h1>My portfolio</h1>
            <div class="categories">
                <a id="all" class="cat">All</a>
                <a id="amba" class="cat">Ambassador's</a>
                <a id="test" class="cat">TestNet's</a>
            </div>
        </div>
        <div id='blockSize' class="block">
            <div id='blockCards' class="cards"></div>   
        </div>
    </div>
`;
}

export default renderAboutPage;
