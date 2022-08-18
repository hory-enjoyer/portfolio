const scrollContainer = document.querySelector('html');

scrollContainer.addEventListener('wheel', (evt) => {
  scrollContainer.scrollLeft += evt.deltaY;
});
