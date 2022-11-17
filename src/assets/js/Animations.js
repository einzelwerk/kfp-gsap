import { gsap } from 'gsap'
import CustomEase from 'gsap/CustomEase'
import SplitText from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase)
const globalGap = getComputedStyle(document.body).getPropertyValue(
  '--color-font-general'
)
const textSplit = new SplitText('.hero__title', {
  type: 'chars, lines',
  charsClass: 'oh',
  linesClass: 'oh',
})
const { chars } = textSplit
function instaAnim() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero__content',
      start: 'top top',
      end: '70%',
      scrub: true,
    },
  })
  tl.to('.hero__content', {
    ease: 'Power.2',
    backgroundPositionY: '100%',
  })
}
function onLoadAnim() {
  const preloader = document.querySelector('.preloader')
  const preloaderLogo = document.querySelector('.preloader .logo__src')
  const heroContent = document.querySelector('.hero__content')
  const tl = gsap.timeline()
  console.log(preloader)
  if (!preloader) {
    tl.then(() => {
      animAfterLoaded()
    })
  }

  setTimeout(() => {
    if (preloader) {
      tl.to(preloader, {
        yPercent: -100,
        duration: 1,
        ease: CustomEase.create('cubic', '0.96, 0.02, 0.34, 0.99'),
      })
      tl.to(
        preloaderLogo,
        {
          duration: 1,
          yPercent: -100,
        },
        '<'
      )
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
      )
      tl.fromTo(
        chars,
        {
          y: 100,
        },
        {
          stagger: 0.01,
          y: 0,
        }
      )
      tl.then(() => {
        animAfterLoaded()
      })
    }
  }, 500)
}

const sidebarHeight = document
  .querySelector('.project-content__sidebar')
  ?.getBoundingClientRect().height
function servicesSticky() {
  const contentHeight = document.querySelector(
    '.project-content__gallery'
  )?.offsetHeight
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.project-content__sidebar ',
      start: '5% 5%',
      pin: true,
      end: `+=${contentHeight - sidebarHeight}`,
      scrub: true,
    },
  })
}

function chronology() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about-slider-wrapper',
      start: 'top center',
      end: 'center center',
    },
  })
  tl.to('.about-slider-line__active-line', {
    ease: CustomEase.create('cubic', '0.96, 0.02, 0.34, 0.99'),
    width:
      document.querySelector('.about-slider__slide')?.offsetWidth - globalGap,
  })
}

function animAfterLoaded() {}

function textAnimation() {
  const titles = document.querySelectorAll('h2 , .section-heading__desc')
  titles.forEach((title) => {
    const textSplit = new SplitText(title, {
      type: 'chars, lines',
      charsClass: 'oh',
      linesClass: 'oh',
    })
    const tl1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
        },
      })
      .fromTo(
        textSplit.chars,
        {
          y: 200,
        },
        {
          duration: 0.8,
          y: 0,

          stagger: 0.01,
        }
      )
  })
}

window.addEventListener('load', () => {
  onLoadAnim()
  instaAnim()
  servicesSticky()
  chronology()
  textAnimation()
})
