function createParagraph() {
  const para = document.createElement('p');
  para.textContent = 'ぴぃ！ぴーぃっ！びかぢゅゅうー！ぴかぁ！ぴがぴか！ぴかぴかっ！ぴかちゅう！';
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', createParagraph);
}
