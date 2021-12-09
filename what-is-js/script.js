function createParagraph() {
  const para = document.createElement('p');
  para.textContent = 'お疲れさまです！ゆっくり休んでください！';
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', createParagraph);
}
