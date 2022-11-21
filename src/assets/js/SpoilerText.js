import { gsap } from 'gsap';

const showTextBtn = document.querySelector('.js-show-text');
if (showTextBtn) {
  const text = document.querySelectorAll('.js-hidden-text p:not(:first-child)');
  const t = gsap.timeline({
    paused: true,
    reversed: true,
  });
  t.set(text, {
    autoAlpha: 1,
  });
  t.from(text, {
    height: 0,
    display: 'none',
  });
  showTextBtn.addEventListener('click', () => {
    if (t.reversed()) {
      t.play();
    } else {
      t.reverse();
    }
    showTextBtn.classList.toggle('opened');
    const textContent = showTextBtn.querySelector('span').dataset.switchText;
    showTextBtn.querySelector('span').dataset.switchText =
      showTextBtn.querySelector('span').innerText;
    showTextBtn.querySelector('span').innerText = textContent;
  });
}
