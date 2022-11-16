import {sidebarHeight} from './Animations';
import {gsap} from 'gsap';

const showTextBtn = document.querySelector('.js-show-text');
if (showTextBtn) {
  const sidebar = document.querySelector('.project-content__sidebar');
  const text = document.querySelectorAll('.js-hidden-text p:not(:first-child)');
  console.log(text);
  const tl = gsap.timeline();
  const t = gsap.timeline({
    paused: true,
    reversed: true,
  });
  t.set(text, {
    autoAlpha: 1,
  });
  t.from(text, {
    height: 0,
  });
  showTextBtn.addEventListener('click', e => {
    t.reversed() ? t.play() : t.reverse();
    const textContent = showTextBtn.querySelector('span').dataset.switchText;
    showTextBtn.querySelector('span').dataset.switchText = showTextBtn.querySelector(
      'span'
    ).innerText;
    showTextBtn.querySelector('span').innerText = textContent;
  });
}
