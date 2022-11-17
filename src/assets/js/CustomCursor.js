import { gsap } from 'gsap';

const cursorTarget = document.querySelector('.js-portfolio-slider');
const customCursor = document.querySelector('.custom-cursor');

if (cursorTarget) {
  cursorTarget.addEventListener('mouseover', () => {
    gsap.to(customCursor, {
      scale: 1,
      opacity: 1,
    });
  });
  cursorTarget.addEventListener('mousemove', (e) => {
    gsap.to(customCursor, {
      css: {
        left: e.clientX,
        top: e.clientY,
      },
    });
  });
  cursorTarget.addEventListener('mouseout', () => {
    gsap.to(customCursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
