// @ts-nocheck
const showTextBtn = document.querySelector('.js-show-text');
if (showTextBtn) {
  showTextBtn.addEventListener('click', e => {
    const text = e.target.closest('.js-hidden-text');
    text.classList.toggle('opened');
    showTextBtn.classList.toggle('opened')
    const textContent = showTextBtn.querySelector('span').dataset.switchText
    showTextBtn.querySelector('span').dataset.switchText = showTextBtn.querySelector('span').innerText;
    showTextBtn.querySelector('span').innerText = textContent;
  
  });
  
}
