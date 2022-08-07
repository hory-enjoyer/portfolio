export function renderData(d) {
  const cards = document.querySelector('.cards');
  cards.innerHTML = '';

  d.forEach((el) => {
    const link = document.createElement('a');
    link.target = '_blank';
    link.href = el.href;

    const image = document.createElement('img');
    image.src = el.imgSrc;
    image.alt = el.label;

    const heading = document.createElement('h2');
    heading.innerText = el.label;

    link.appendChild(image);
    link.appendChild(heading);

    cards.appendChild(link);
  });
}
