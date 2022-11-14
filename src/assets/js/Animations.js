import {gsap} from 'gsap';
import CustomEase from 'gsap/CustomEase';
import SplitText from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(SplitText, ScrollTrigger);

const SplitHeroTitle = new SplitText('.hero__title', {
  type: 'chars, lines',
  charsClass: 'oh',
  linesClass: 'oh',
});
const {chars} = SplitHeroTitle;
function instaAnim() {
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
function onLoadAnim() {
  const preloader = document.querySelector('.preloader');
  const preloaderLogo = document.querySelector('.preloader .logo__src');
  const heroContent = document.querySelector('.hero__content');
  const tl = gsap.timeline();
  if (!preloader) {
    tl.then(() => {
      animAfterLoaded();
    });
  }
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (preloader) {
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
        tl.then(() => {
          animAfterLoaded();
        });
      }
    }, 500);
  });
}

function servicesSticky() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.project-content__sidebar ',
      start: 'top top',
      pin: true,
      end: `+=${
        document.querySelector('.project-content__gallery')?.getBoundingClientRect().height
      } center`,

      scrub: true,
    },
  });
}

function animAfterLoaded() {}

servicesSticky();

onLoadAnim();

instaAnim();
