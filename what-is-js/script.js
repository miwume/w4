function createParagraph() {
  const para = document.createElement('p');
  para.textContent = 'げんきなときは　げんきでいて〜　つかれたときは　ゆっくりいて〜';
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', createParagraph);
}
