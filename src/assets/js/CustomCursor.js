import { gsap } from 'gsap';

const customCursor = document.querySelector('.custom-cursor');
const cursorTarget = document.querySelectorAll('.show-cursor');
gsap.set(customCursor, {
  xPercent: -50,
  yPercent: -50,
});

function moveCursor(e) {
  gsap.to(customCursor, {
    duration: 0.5,
    x: e.clientX,
    y: e.clientY,
  });
}

function enterCursor() {
  gsap.to(customCursor, {
    duration: 0.5,
    scale: 1,
    opacity: 1,
  });
}
function leaveCursor() {
  gsap.to(customCursor, {
    duration: 0.5,
    scale: 0,
    opacity: 0,
  });
}

cursorTarget.forEach((target) => {
  target.addEventListener('mouseenter', enterCursor);
  target.addEventListener('mouseleave', leaveCursor);
  target.addEventListener('pointermove', moveCursor);
});
