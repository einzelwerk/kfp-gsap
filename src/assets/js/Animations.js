import { gsap } from 'gsap';
import CustomEase from 'gsap/CustomEase';
import SplitText from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';
import breakpoints from './MatchMedia';

gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase);

const globalGap = parseInt(
  getComputedStyle(document.body).getPropertyValue('--gap'),
  10
);

const textSplit = new SplitText('.hero__title', {
  type: 'chars, lines',
  charsClass: 'oh',
  linesClass: 'oh',
});

const { chars } = textSplit;

function chronology() {
  const aboutSliderItem = document.querySelector('.about-slider__slide');
  if (!aboutSliderItem) return;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about-slider-wrapper',
      start: 'top center',
      end: 'center center',
    },
  });
  tl.to('.about-slider-line__active-line', {
    ease: CustomEase.create('cubic', '0.96, 0.02, 0.34, 0.99'),
    width: aboutSliderItem.offsetWidth - globalGap,
  });
}
function animationAfterLoaded() {
  if (window.matchMedia(breakpoints.isDesktop)) return;
  const h1Split = new SplitText('h1', {
    type: 'chars, lines',
    charsClass: 'oh',
    linesClass: 'oh',
  });
  const heroContent = document.querySelector('.hero__content');
  const tl = gsap.timeline();

  tl.fromTo(
    heroContent,
    {
      backgroundSize: '140%',
      backgroundPosition: 'top center',
    },
    {
      duration: 1,
      backgroundSize: '120%',
    },
    '='
  );
  tl.fromTo(
    chars,
    {
      y: 100,
    },
    {
      stagger: 0.01,
      y: 0,
    }
  );
  tl.fromTo(
    h1Split.chars,
    {
      y: 100,
    },
    {
      stagger: 0.01,
      y: 0,
    },
    '<'
  );
}

function textAnimation() {
  const titles = document.querySelectorAll('.section-heading__title');
  const plainText = document.querySelectorAll('p , .news-item__title');
  titles.forEach((title) => {
    const headingSplit = new SplitText(title, {
      type: 'chars, lines',
      charsClass: 'oh',
      linesClass: 'oh',
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        start: 'top 85%',
      },
    });
    tl.fromTo(
      headingSplit.chars,
      {
        y: 200,
      },
      {
        duration: 0.8,
        y: 0,

        stagger: 0.01,
      }
    );
  });
  plainText.forEach((text) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: 'top 85%',
      },
    });
    tl.fromTo(
      text,
      {
        y: 10,
        opacity: 0,
      },
      {
        delay: 1,
        y: 0,
        opacity: 1,
      }
    );
  });
}

function onLoadAnimation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero__content',
      start: 'top top',
      end: '70%',
      scrub: true,
    },
  });
  tl.to('.hero__content', {
    ease: 'Power.2',
    backgroundPositionY: '100%',
  });
}
function Preloader() {
  const preloader = document.querySelector('.preloader');
  const preloaderLogo = document.querySelector('.preloader .logo__src');

  const tl = gsap.timeline();
  if (!preloader) {
    animationAfterLoaded();
    return;
  }
  setTimeout(() => {
    tl.to(preloader, {
      yPercent: -100,
      duration: 1,
      ease: CustomEase.create('cubic', '0.96, 0.02, 0.34, 0.99'),
    });
    tl.to(
      preloaderLogo,
      {
        duration: 1,
        yPercent: -100,
      },
      '<'
    );

    tl.then(animationAfterLoaded());
  }, 500);
}

const sidebarHeight = document
  .querySelector('.project-content__sidebar')
  ?.getBoundingClientRect().height;
function servicesSticky() {
  const contentHeight = document.querySelector(
    '.project-content__gallery'
  )?.offsetHeight;
  gsap.timeline({
    scrollTrigger: {
      trigger: '.project-content__sidebar ',
      start: '5% 5%',
      pin: true,
      end: `+=${contentHeight - sidebarHeight}`,
      scrub: true,
    },
  });
}

window.addEventListener('load', () => {
  Preloader();
  onLoadAnimation();
  chronology();
  textAnimation();
  if (window.matchMedia(breakpoints.isDesktop).matches) {
    servicesSticky();
  }
});
